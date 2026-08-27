/**
 * Regenerates lib/image-dimensions.ts — the intrinsic width/height of every
 * bitmap under public/, keyed by the public path it's served from.
 *
 * next/image needs both dimensions up front for any `src` given as a string
 * (rather than a static import), and they're what let the browser reserve
 * the right box before the file arrives — the difference between a page
 * that settles and one that shoves itself around as it loads.
 *
 * Run after adding or replacing an image:  node scripts/gen-image-dimensions.mjs
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const publicDir = join(root, 'public');
const EXTS = new Set(['.webp', '.png', '.jpg', '.jpeg', '.gif']);

/** Minimal header readers — enough for the four formats this repo ships. */
function readPng(buf) {
  if (buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function readGif(buf) {
  if (buf.toString('ascii', 0, 3) !== 'GIF') return null;
  return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
}

function readJpeg(buf) {
  if (buf.readUInt16BE(0) !== 0xffd8) return null;
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    // SOF0–SOF15, skipping the four that aren't frame headers.
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

function readWebp(buf) {
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') {
    return null;
  }
  const format = buf.toString('ascii', 12, 16);
  if (format === 'VP8X') {
    return {
      width: 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16)),
      height: 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16)),
    };
  }
  if (format === 'VP8 ') {
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (format === 'VP8L') {
    const bits = buf.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  return null;
}

function dimensions(buf, ext) {
  switch (ext) {
    case '.png': return readPng(buf);
    case '.gif': return readGif(buf);
    case '.jpg':
    case '.jpeg': return readJpeg(buf);
    case '.webp': return readWebp(buf);
    default: return null;
  }
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const entries = [];
const skipped = [];

for await (const file of walk(publicDir)) {
  const ext = extname(file).toLowerCase();
  if (!EXTS.has(ext)) continue;
  const size = dimensions(await readFile(file), ext);
  const publicPath = `/${relative(publicDir, file)}`;
  if (size) entries.push([publicPath, size]);
  else skipped.push(publicPath);
}

entries.sort(([a], [b]) => a.localeCompare(b));

const body = entries
  .map(([path, { width, height }]) => `  '${path}': [${width}, ${height}],`)
  .join('\n');

await writeFile(
  join(root, 'lib', 'image-dimensions.ts'),
  `/**
 * GENERATED FILE — do not edit by hand.
 * Run \`node scripts/gen-image-dimensions.mjs\` after adding or replacing an
 * image in public/.
 *
 * Intrinsic [width, height] for every bitmap the site ships, keyed by public
 * path. Consumed by components/ArchiveImage.tsx, which needs both up front
 * so next/image can reserve the right box and emit a sensible srcset.
 */
export const IMAGE_DIMENSIONS: Record<string, [number, number]> = {
${body}
};
`
);

console.log(`wrote lib/image-dimensions.ts — ${entries.length} images`);
if (skipped.length) console.warn(`skipped (unreadable header): ${skipped.join(', ')}`);
