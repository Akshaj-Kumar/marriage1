import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, Sparkles } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';
import { weddingAudio } from '../utils/weddingAudio';

export default function Hero({ onExplore }) {
  const { couple, countdown } = WEDDING_DATA;

  // Real-time Countdown calculation to 12 February 2027 10:00 AM IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(countdown.targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [countdown.targetDate]);

  const handleExploreClick = () => {
    weddingAudio.playRoyalChime();
    weddingAudio.play().catch(() => {});
    if (onExplore) {
      onExplore();
    } else {
      document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-hidden bg-burgundy-deep">
      
      {/* Background Image with Rich Warm Cinematic Lighting */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        {/* Soft Warm Vignette & Amber Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy-deep via-black/55 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,195,120,0.15)_0%,rgba(46,14,24,0.7)_100%)]" />
      </div>

      {/* Replicate the signature Gold Frame Border seen in screenshot 2 */}
      <div className="absolute inset-4 sm:inset-8 md:inset-10 border border-gold/40 pointer-events-none z-10">
        {/* Corner Accents */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-gold" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gold" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gold" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center pt-20 pb-12 px-4">
        
        {/* "TOGETHER WITH OUR FAMILIES" (Matches Screenshot 2) */}
        <motion.p
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm font-cinzel tracking-[0.35em] text-gold-light uppercase mb-6 drop-shadow"
        >
          {couple.subtitle}
        </motion.p>

        {/* "Aarav & Meera" Main Title (Matches Screenshot 2) */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading text-white tracking-wide leading-none mb-6 drop-shadow-2xl select-none"
        >
          <span>{couple.groomFirst}</span>{' '}
          <span className="font-script text-gold-light font-normal text-6xl sm:text-8xl md:text-9xl italic">
            &amp;
          </span>{' '}
          <span>{couple.brideFirst}</span>
        </motion.h1>

        {/* "12 · 13 · 14 FEBRUARY 2027 | JAIPUR, INDIA" (Matches Screenshot 2) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base font-cinzel tracking-[0.25em] text-gold-light/95 uppercase mb-6"
        >
          <span>{couple.weddingDatesShort}</span>
          <span className="hidden sm:inline text-gold">|</span>
          <span>{couple.weddingLocationShort}</span>
        </motion.div>

        {/* Exclusive Song Playing Indicator */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          onClick={() => weddingAudio.toggle()}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-gold/40 hover:border-gold text-gold-light text-xs font-cinzel tracking-wider uppercase mb-8 backdrop-blur-md transition-all shadow-md group"
          title="Click to toggle Tum Mile playback"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
          <span>🎵 Tum Mile (Love Reprise) • Pritam &amp; Javed Ali</span>
        </motion.button>

        {/* Live Countdown to 12 February 2027 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full mb-10 px-2"
        >
          {[
            { label: 'DAYS', val: timeLeft.days },
            { label: 'HOURS', val: timeLeft.hours },
            { label: 'MINUTES', val: timeLeft.minutes },
            { label: 'SECONDS', val: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-black/40 backdrop-blur-md border border-gold/40 rounded-xl p-2.5 sm:p-3 text-center shadow-lg"
            >
              <div className="text-xl sm:text-3xl font-heading font-bold text-white leading-tight">
                {String(item.val).padStart(2, '0')}
              </div>
              <div className="text-[9px] sm:text-[10px] font-cinzel tracking-widest text-gold-light/80 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* "EXPLORE THE CELEBRATION" (Matches exact button in Screenshot 2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col items-center gap-6"
        >
          <button
            onClick={handleExploreClick}
            className="px-8 sm:px-12 py-3.5 sm:py-4 border border-gold-light/80 hover:border-gold-light bg-black/30 hover:bg-gold/20 text-gold-light hover:text-white text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase transition-all duration-300 shadow-lg backdrop-blur-sm group"
          >
            <span className="group-hover:tracking-[0.3em] transition-all">
              EXPLORE THE CELEBRATION
            </span>
          </button>

          {/* Smooth Scroll Down Indicator */}
          <button
            onClick={handleExploreClick}
            className="flex flex-col items-center text-gold-light/60 hover:text-gold-light transition-colors animate-bounce mt-4 cursor-pointer"
            aria-label="Scroll down to story"
          >
            <span className="text-[10px] font-cinzel tracking-widest uppercase mb-1">
              Scroll Down
            </span>
            <ChevronDown className="w-4 h-4 text-gold-light" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
