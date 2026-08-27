'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { DONATE_URL, EXTERNAL_LINK_PROPS } from '@/lib/links';

// The statue first. The campaign exists to put Len Johnson in bronze in
// Manchester city centre, and that destination used to sit fifth of six,
// behind the two emptiest pages on the site. Champions moves to the end
// until it has real Champions in it. "More information" leaves the bar
// altogether — it is the vaguest label available and the page it points at
// is a reference desk, which belongs in the footer with the other
// reference material, not in a five-item primary nav.
const NAV_LINKS = [
  { href: '/statue', label: 'The statue' },
  { href: '/story', label: "Len's story" },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/champions', label: 'Champions' },
];

// Roughly matches the header's real rendered height (measured precisely
// below, once mounted) — used only for the very first paint, so the page
// doesn't visibly jump once the real measurement lands.
const DEFAULT_NAV_HEIGHT = 88;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [navHeight, setNavHeight] = useState(DEFAULT_NAV_HEIGHT);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Measure the header's actual height (it varies with the wordmark's
  // clamp()'d font size across breakpoints) and reserve exactly that much
  // space below it with a spacer, since a `position: fixed` header is out
  // of flow and would otherwise sit on top of the first section.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const measure = () => setNavHeight(header.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  // Hide on the way down, show on the way up — the pattern most sites use,
  // and one that sidesteps the whole family of iOS Safari bugs that came
  // from pinning something with `position: sticky` right at the very top
  // edge (see the CSS for the fuller account of what those were). A `fixed`
  // header that moves under the app's own control, rather than sitting
  // statically at the boundary Safari's own address-bar animation cares
  // about, doesn't get pulled into that failure mode.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      // iOS rubber-band overscroll can briefly report a negative scrollY;
      // clamp it so that bounce isn't misread as "scrolling up".
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;

      setScrolled(y > 40);

      if (y < navHeight) {
        // Always show the bar once you're back near the top — hiding it
        // there would mean landing on a page with no way to open the menu.
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastY = y;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
    // navHeight only changes the "near the top" threshold slightly; not
    // worth re-binding the listener for.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setHidden(false);
  }, [pathname]);

  // Keep the bar on screen for as long as the menu is open, whatever the
  // scroll position underneath it — there'd be no way to close the menu
  // otherwise.
  useEffect(() => {
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

  useEffect(() => {
    // Plain `overflow: hidden` on <body> doesn't reliably block touch/
    // momentum scrolling on iOS Safari, so the page behind the open menu
    // can still scroll. Pin the body in place instead, and restore the
    // scroll position when the menu closes.
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = String(scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.classList.add('nav-open');
    } else {
      const scrollY = document.body.dataset.scrollY;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.classList.remove('nav-open');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
        delete document.body.dataset.scrollY;
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.classList.remove('nav-open');
    };
  }, [menuOpen]);

  // The menu covers the whole viewport, so it has to behave like a modal
  // dialog and not merely look like one. Escape already closed it; what was
  // missing was the focus half — tabbing past the last item walked straight
  // into the page underneath, which is still there, still focusable, and
  // completely invisible. Focus moves in on open, cycles inside the panel,
  // and returns to the burger on close.
  useEffect(() => {
    if (!menuOpen) return;

    const panel = menuRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // The burger sits at z-index 1000, above the panel's 999 — it is the
    // dialog's visible close control even though it lives in the header
    // markup, so it belongs inside the cycle. Without it a keyboard user
    // trapped in the panel would have Escape and nothing else.
    const focusable = (): HTMLElement[] => {
      const inPanel = Array.from(
        panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []
      ).filter((el) => el.getClientRects().length > 0);
      return toggleRef.current ? [...inPanel, toggleRef.current] : inPanel;
    };

    focusable()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;

      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      // Wrap at both ends, and also catch the case where focus has somehow
      // ended up outside the panel entirely (browser chrome, a stray
      // programmatic focus) by pulling it back to the first item.
      const inside = items.includes(active as HTMLElement);

      if (e.shiftKey && (active === first || !inside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !inside)) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      // Only take focus back if it is still somewhere inside the panel we're
      // tearing down; if the user has clicked a link, let the new page have it.
      if (panel?.contains(document.activeElement)) {
        (toggleRef.current ?? previouslyFocused)?.focus();
      }
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
    <header
      ref={headerRef}
      className={`site-nav ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}
    >
      <nav className="site-nav-inner" aria-label="Main">
        <Link href="/" className="site-wordmark display-font text-sm">
          LEN JOHNSON<br />CAMPAIGN
        </Link>

        <ul className="site-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`site-nav-link label ${isActive(link.href) ? 'is-active' : ''}`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="site-nav-actions">
          <a
            href={DONATE_URL}
            {...EXTERNAL_LINK_PROPS}
            className="button site-nav-donate"
          >
            <span>Donate</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={`site-nav-toggle ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`burger ${menuOpen ? 'is-open' : ''}`} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </nav>
    </header>

    {/* `.site-nav` is `position: fixed`, so it's out of the document flow —
        without this, the page's first section would sit directly under the
        very top of the viewport, behind the bar. Kept in sync with the
        header's real, responsive height via ResizeObserver above rather
        than a guessed constant. */}
    <div style={{ height: navHeight }} aria-hidden="true" />

    {/* Rendered as a sibling of the header, not a child of it. `.site-nav`
        carries a `transform` (the hide/show animation) and a transformed
        ancestor becomes the containing block for any `position: fixed`
        descendant — this menu's `inset: 0` would then resolve against the
        header's own small box instead of the viewport, collapsing the
        overlay down to a sliver behind the burger icon. */}
    <div
      ref={menuRef}
      id="mobile-menu"
      className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
      hidden={!menuOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <ul className="mobile-menu-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="display-font h-small text-white"
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <a href={DONATE_URL} {...EXTERNAL_LINK_PROPS} className="button mobile-menu-donate mt-8">
        <span>Donate</span>
      </a>
    </div>
    </>
  );
}
