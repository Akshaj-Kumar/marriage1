const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const svgs = {
  'couple-golden.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bgGolden" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D0B16"/>
      <stop offset="50%" stop-color="#461927"/>
      <stop offset="100%" stop-color="#1A050D"/>
    </linearGradient>
    <radialGradient id="goldGlow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#461927" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGolden)"/>
  <circle cx="400" cy="240" r="260" fill="url(#goldGlow)"/>

  <!-- Ornate Royal Arch -->
  <path d="M 180 550 L 180 240 Q 400 60 620 240 L 620 550" fill="none" stroke="#D4AF37" stroke-width="2.5" opacity="0.6"/>
  <path d="M 210 550 L 210 260 Q 400 100 590 260 L 590 550" fill="none" stroke="#C5A059" stroke-width="1" stroke-dasharray="8 6" opacity="0.4"/>

  <!-- Couple Silhouette in Royal Attire -->
  <g fill="#FDFBF7" opacity="0.95">
    <!-- Groom Head / Turban with Kalgi -->
    <ellipse cx="360" cy="230" rx="32" ry="34"/>
    <polygon points="350,195 360,170 370,195" fill="#D4AF37"/>
    <!-- Groom Sherwani -->
    <path d="M 315 280 Q 360 260 405 280 L 415 520 L 305 520 Z" fill="#E5C378" opacity="0.9"/>
    
    <!-- Bride Head / Matha Patti -->
    <ellipse cx="440" cy="245" rx="28" ry="30"/>
    <path d="M 425 230 Q 440 220 455 230" stroke="#D4AF37" stroke-width="3" fill="none"/>
    <!-- Bride Royal Lehenga & Dupatta -->
    <path d="M 395 290 Q 440 275 480 300 L 530 520 L 370 520 Z" fill="#D4AF37" opacity="0.85"/>
  </g>

  <!-- Golden Varmala Garland -->
  <path d="M 345 280 Q 380 350 415 285" fill="none" stroke="#EAB308" stroke-width="6" stroke-dasharray="6 4"/>
  <path d="M 420 295 Q 455 365 485 300" fill="none" stroke="#EAB308" stroke-width="6" stroke-dasharray="6 4"/>

  <text x="400" y="550" font-family="'Cinzel', serif" font-size="28" font-weight="600" fill="#E5C378" text-anchor="middle" letter-spacing="4">AARAV &amp; MEERA</text>
  <text x="400" y="580" font-family="'Montserrat', sans-serif" font-size="14" fill="#E8DFD5" text-anchor="middle" letter-spacing="3">TWO HEARTS • ONE BEAUTIFUL JOURNEY</text>
</svg>`,

  'wedding-flowers.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#F4EFEA"/>
  <!-- Decorative Floral Bouquet -->
  <circle cx="400" cy="270" r="180" fill="#FAF7F2" stroke="#E8DFD5" stroke-width="2"/>
  
  <!-- Rose / Peony Petals -->
  <g fill="#E11D48" opacity="0.85">
    <circle cx="370" cy="240" r="45"/>
    <circle cx="430" cy="230" r="50" fill="#BE123C"/>
    <circle cx="400" cy="285" r="48" fill="#F43F5E"/>
    <circle cx="330" cy="280" r="38" fill="#FB7185"/>
    <circle cx="465" cy="290" r="42" fill="#E11D48"/>
  </g>

  <!-- Marigold Sunshine Blooms -->
  <g fill="#EAB308">
    <circle cx="340" cy="210" r="30"/>
    <circle cx="460" cy="200" r="32"/>
    <circle cx="400" cy="340" r="34"/>
  </g>

  <!-- Green Eucalyptus & Palm Foliage -->
  <g fill="#059669" opacity="0.7">
    <ellipse cx="280" cy="240" rx="45" ry="16" transform="rotate(-30 280 240)"/>
    <ellipse cx="520" cy="240" rx="45" ry="16" transform="rotate(30 520 240)"/>
    <ellipse cx="300" cy="330" rx="40" ry="14" transform="rotate(40 300 330)"/>
    <ellipse cx="500" cy="330" rx="40" ry="14" transform="rotate(-40 500 330)"/>
  </g>

  <text x="400" y="470" font-family="'Cormorant Garamond', serif" font-size="34" font-weight="600" fill="#461927" text-anchor="middle" letter-spacing="2">Sacred Floral Blooms</text>
  <text x="400" y="505" font-family="'Montserrat', sans-serif" font-size="14" fill="#742D44" text-anchor="middle" letter-spacing="3">ROSES, MARIGOLDS &amp; JAIPUR JASMINE</text>
</svg>`,

  'pool-celebration.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="poolSky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E0F2FE"/>
      <stop offset="60%" stop-color="#BAE6FD"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#poolSky)"/>
  
  <!-- Pool Reflection -->
  <rect x="0" y="380" width="800" height="220" fill="#0369A1" opacity="0.8"/>
  <line x1="0" y1="410" x2="800" y2="410" stroke="#38BDF8" stroke-width="2" opacity="0.6"/>
  <line x1="0" y1="450" x2="800" y2="450" stroke="#7DD3FC" stroke-width="1.5" opacity="0.4"/>

  <!-- White Festive Balloons Ascending -->
  <g fill="#FFFFFF" opacity="0.95" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))">
    <circle cx="280" cy="140" r="26"/>
    <circle cx="340" cy="110" r="28"/>
    <circle cx="400" cy="90" r="32"/>
    <circle cx="460" cy="120" r="27"/>
    <circle cx="520" cy="150" r="24"/>
    <circle cx="380" cy="170" r="22"/>
  </g>
  
  <!-- Palace Balustrade -->
  <rect x="0" y="340" width="800" height="40" fill="#FAF7F2" stroke="#E8DFD5" stroke-width="2"/>
  <g fill="#C5A059">
    <rect x="100" y="348" width="12" height="24" rx="2"/>
    <rect x="200" y="348" width="12" height="24" rx="2"/>
    <rect x="300" y="348" width="12" height="24" rx="2"/>
    <rect x="400" y="348" width="12" height="24" rx="2"/>
    <rect x="500" y="348" width="12" height="24" rx="2"/>
    <rect x="600" y="348" width="12" height="24" rx="2"/>
    <rect x="700" y="348" width="12" height="24" rx="2"/>
  </g>

  <text x="400" y="530" font-family="'Cinzel', serif" font-size="28" font-weight="600" fill="#FAF7F2" text-anchor="middle" letter-spacing="3">PALACE COURTYARD CELEBRATION</text>
</svg>`,

  'palace-heritage.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#2E0E18"/>
  <circle cx="400" cy="220" r="220" fill="#C5A059" opacity="0.2"/>

  <!-- Grand Jaipur Heritage Jharokhas & Domes -->
  <!-- Main Central Dome -->
  <path d="M 320 220 Q 400 110 480 220 Z" fill="#C5A059"/>
  <rect x="340" y="220" width="120" height="240" fill="#3A121E" stroke="#C5A059" stroke-width="2"/>
  <!-- Arch Opening -->
  <path d="M 370 460 L 370 330 Q 400 290 430 330 L 430 460 Z" fill="#230811" stroke="#D4AF37" stroke-width="2"/>

  <!-- Left Side Chhatri Dome -->
  <path d="M 180 260 Q 240 180 300 260 Z" fill="#C5A059" opacity="0.9"/>
  <rect x="200" y="260" width="80" height="200" fill="#3A121E" stroke="#C5A059" stroke-width="1.5"/>

  <!-- Right Side Chhatri Dome -->
  <path d="M 500 260 Q 560 180 620 260 Z" fill="#C5A059" opacity="0.9"/>
  <rect x="520" y="260" width="80" height="200" fill="#3A121E" stroke="#C5A059" stroke-width="1.5"/>

  <!-- Spire Finials (Kalash) -->
  <line x1="400" y1="70" x2="400" y2="120" stroke="#D4AF37" stroke-width="4"/>
  <circle cx="400" cy="70" r="7" fill="#D4AF37"/>

  <text x="400" y="520" font-family="'Cinzel', serif" font-size="28" font-weight="600" fill="#E5C378" text-anchor="middle" letter-spacing="4">THE ROYAL HERITAGE PALACE</text>
  <text x="400" y="555" font-family="'Montserrat', sans-serif" font-size="14" fill="#E8DFD5" text-anchor="middle" letter-spacing="3">JAIPUR • RAJASTHAN</text>
</svg>`,

  'table-setting.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#FAF7F2"/>
  <!-- Royal Wedding Banquet Table -->
  <ellipse cx="400" cy="380" rx="340" ry="120" fill="#F4EFEA" stroke="#C5A059" stroke-width="2"/>
  
  <!-- Golden Centerpiece Charger Plates -->
  <circle cx="400" cy="330" r="55" fill="#D4AF37" stroke="#9E7C38" stroke-width="3"/>
  <circle cx="400" cy="330" r="42" fill="#FAF7F2"/>
  <!-- Marigold Vase -->
  <rect x="385" y="260" width="30" height="50" rx="6" fill="#461927"/>
  <circle cx="400" cy="245" r="28" fill="#EAB308"/>

  <!-- Side Plates -->
  <circle cx="210" cy="360" r="45" fill="#D4AF37" opacity="0.8"/>
  <circle cx="590" cy="360" r="45" fill="#D4AF37" opacity="0.8"/>

  <!-- Cutlery -->
  <rect x="150" y="340" width="6" height="45" rx="2" fill="#C5A059"/>
  <rect x="270" y="340" width="6" height="45" rx="2" fill="#C5A059"/>
  <rect x="530" y="340" width="6" height="45" rx="2" fill="#C5A059"/>
  <rect x="650" y="340" width="6" height="45" rx="2" fill="#C5A059"/>

  <text x="400" y="530" font-family="'Cormorant Garamond', serif" font-size="32" font-weight="600" fill="#461927" text-anchor="middle" letter-spacing="2">The Royal Feast Setting</text>
  <text x="400" y="565" font-family="'Montserrat', sans-serif" font-size="14" fill="#742D44" text-anchor="middle" letter-spacing="3">TRADITIONAL RAJASTHANI HOSPITALITY</text>
</svg>`,

  'mehendi-art.svg': `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <rect width="800" height="600" fill="#1C1917"/>
  <circle cx="400" cy="270" r="220" fill="#78350F" opacity="0.25"/>

  <!-- Mandala Henna Motif -->
  <circle cx="400" cy="270" r="140" fill="none" stroke="#D97706" stroke-width="2"/>
  <circle cx="400" cy="270" r="100" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="10 6"/>
  <circle cx="400" cy="270" r="60" fill="none" stroke="#D97706" stroke-width="2"/>
  <circle cx="400" cy="270" r="20" fill="#F59E0B"/>

  <!-- Paisley / Kalka Motifs -->
  <g fill="none" stroke="#FBBF24" stroke-width="2" opacity="0.85">
    <path d="M 400 130 C 440 100, 480 150, 400 210"/>
    <path d="M 400 410 C 360 440, 320 390, 400 330"/>
    <path d="M 260 270 C 230 230, 280 190, 340 270"/>
    <path d="M 540 270 C 570 310, 520 350, 460 270"/>
  </g>

  <text x="400" y="510" font-family="'Cinzel', serif" font-size="28" font-weight="600" fill="#FCD34D" text-anchor="middle" letter-spacing="3">INTRICATE MEHENDI TALES</text>
  <text x="400" y="545" font-family="'Montserrat', sans-serif" font-size="14" fill="#D1D5DB" text-anchor="middle" letter-spacing="3">HENNA SUNG WITH LOVE &amp; TRADITION</text>
</svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(dir, filename), content.trim());
}

console.log('All wedding SVGs generated successfully in marriage1/public/images/!');
