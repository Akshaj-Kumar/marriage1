const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://p.scdn.co/mp3-preview/5bf01c5f7ca24b64e03de69f8ea6a594541d542e';
const dest = path.join(__dirname, 'public', 'audio', 'tum-mile.mp3');

console.log('Downloading Tum Mile audio to:', dest);

const file = fs.createWriteStream(dest);

https.get(url, (response) => {
  if (response.statusCode === 200) {
    response.pipe(file);
    file.on('finish', () => {
      file.close(() => {
        const stats = fs.statSync(dest);
        console.log('Download complete! Size:', stats.size, 'bytes');
      });
    });
  } else {
    console.error('Failed with status:', response.statusCode);
  }
}).on('error', (err) => {
  console.error('Error downloading:', err);
});
