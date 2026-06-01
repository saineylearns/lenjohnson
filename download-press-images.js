const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://ichef.bbci.co.uk/news/1024/branded_sport/12345/production/_114831234_lenjohnson.jpg',
    name: 'bbc-len-johnson.jpg',
    fallback: true
  },
  {
    url: 'https://e0.365dm.com/20/10/2048x1152/skysports-len-johnson-boxing_5132488.jpg',
    name: 'sky-len-johnson.jpg',
    fallback: true
  },
  {
    url: 'https://i2-prod.manchestereveningnews.co.uk/incoming/article30226520.ece/ALTERNATES/s1200/0_Len-Johnson.jpg',
    name: 'men-len-johnson.jpg',
    fallback: true
  },
  {
    url: 'https://manchesterarchiveplus.files.wordpress.com/2024/10/len-johnson-poster.jpg',
    name: 'archivesplus-len.jpg',
    fallback: true
  },
];

async function downloadImage(url, filename) {
  return new Promise((resolve) => {
    const filePath = path.join(__dirname, 'public/images/press', filename);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filePath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        console.log(`✗ Failed (${response.statusCode}): ${filename}`);
        resolve();
      }
    }).on('error', () => {
      console.log(`✗ Error downloading: ${filename}`);
      resolve();
    });
  });
}

(async () => {
  for (const img of images) {
    await downloadImage(img.url, img.name);
  }
  console.log('Download complete!');
})();
