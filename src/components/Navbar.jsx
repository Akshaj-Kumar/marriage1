import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Music, Volume2, VolumeX, Sparkles, Calendar, Heart } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function Navbar({ isMusicPlaying, onToggleMusic, onReopenEnvelope, petalsEnabled, onTogglePetals }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { couple, navLinks } = WEDDING_DATA;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    weddingAudio.playRoyalChime();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-burgundy-dark/95 backdrop-blur-md border-b border-gold/30 shadow-lg shadow-black/30' 
            : 'py-5 bg-gradient-to-b from-black/60 via-black/20 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Top Left Monogram (Matches Screenshot: "A & M") */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.25em] text-gold-light group-hover:text-white transition-colors">
                {couple.monogram}
              </span>
              <span className="text-[9px] font-montserrat tracking-[0.2em] text-gold/70 uppercase">
                Jaipur • 2027
              </span>
            </div>
          </a>

          {/* Desktop Direct Links */}
          <nav className="hidden lg:flex items-center gap-6 px-6 py-2 rounded-full bg-burgundy/60 border border-gold/30 backdrop-blur-md">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-cinzel tracking-[0.15em] text-gold-light/90 hover:text-white transition-colors uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Controls: Tum Mile Audio Toggle + MENU Button */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Music Toggle Button */}
            <button
              onClick={onToggleMusic}
              title={isMusicPlaying ? "Pause Tum Mile" : "Play Tum Mile - Love Reprise"}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-cinzel transition-all ${
                isMusicPlaying
                  ? 'bg-gold/20 border-gold-light text-gold-light shadow-gold-glow'
                  : 'bg-black/40 border-white/20 text-gray-300 hover:text-white hover:border-gold'
              }`}
            >
              {isMusicPlaying ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-gold-light animate-pulse" />
                  <span className="hidden sm:inline text-[10px] tracking-wider text-gold-light">TUM MILE</span>
                  <div className="flex items-end gap-0.5 h-2.5">
                    <span className="w-0.5 bg-gold-light eq-bar" />
                    <span className="w-0.5 bg-gold eq-bar" />
                    <span className="w-0.5 bg-gold-light eq-bar" />
                  </div>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-gray-300" />
                  <span className="hidden sm:inline text-[10px] tracking-wider text-gray-300">PLAY TUM MILE</span>
                </>
              )}
            </button>

            {/* Replicate exact "MENU" bordered button from screenshot 2 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-1.5 border border-gold-light/60 hover:border-gold-light text-gold-light text-xs font-cinzel tracking-[0.2em] uppercase transition-all duration-300 bg-black/20 hover:bg-gold/10"
              aria-label="Open Navigation Menu"
            >
              MENU
            </button>
          </div>
        </div>
      </header>

      {/* Royal Fullscreen / Drawer Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-burgundy-deep/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-gold/20 pb-6 max-w-5xl mx-auto w-full">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.3em] text-gold-light">
                {couple.monogram}
              </span>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full border border-gold/40 text-gold-light hover:text-white hover:border-gold transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="max-w-xl mx-auto w-full py-10 flex flex-col gap-6 text-center">
              <span className="text-xs font-cinzel tracking-[0.3em] text-gold/70 uppercase">
                WEDDING CELEBRATION DIRECTORY
              </span>

              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-heading text-3xl sm:text-4xl text-white hover:text-gold-light transition-colors py-1 hover:scale-105 transform duration-200"
                >
                  {link.label}
                </motion.button>
              ))}

              {/* Extras in Menu */}
              <div className="pt-8 border-t border-gold/20 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onReopenEnvelope();
                  }}
                  className="px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold-light text-xs font-cinzel tracking-wider hover:bg-gold/20"
                >
                  ✉️ Reopen Wax Envelope
                </button>

                <button
                  onClick={onTogglePetals}
                  className="px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold-light text-xs font-cinzel tracking-wider hover:bg-gold/20"
                >
                  🌸 Petals: {petalsEnabled ? "ON" : "OFF"}
                </button>
              </div>
            </div>

            {/* Bottom Menu Footer */}
            <div className="border-t border-gold/20 pt-6 text-center max-w-5xl mx-auto w-full">
              <p className="text-xs font-cinzel tracking-[0.2em] text-gold-light/60">
                AARAV &amp; MEERA • 12–14 FEBRUARY 2027 • JAIPUR, INDIA
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
