const https = require('https');

fetch('https://open.spotify.com/embed/track/2reL5aFJtC5CDphTTJHuRH')
  .then(r => r.text())
  .then(html => {
    // Spotify embed JSON data
    const m = html.match(/<script id="__NEXT_DATA__" type="application\/json">([^<]+)<\/script>/);
    if (m) {
      try {
        const json = JSON.parse(m[1]);
        console.log('JSON keys:', Object.keys(json));
        const track = json?.props?.pageProps?.state?.data?.entity;
        console.log('Track audio preview:', track?.audioPreview);
      } catch (e) {
        console.log('Parse error', e);
      }
    } else {
      console.log('No next data found');
    }
  })
  .catch(console.error);
