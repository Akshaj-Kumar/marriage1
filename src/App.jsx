import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import InvitationEnvelope from './components/InvitationEnvelope';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStory from './components/AboutStory';
import SpotifySongSection from './components/SpotifySongSection';
import Festivities from './components/Festivities';
import WhenAndWhere from './components/WhenAndWhere';
import MomentsGallery from './components/MomentsGallery';
import RSVP from './components/RSVP';
import BlessingsWall from './components/BlessingsWall';
import MusicPlayer from './components/MusicPlayer';
import FallingPetals from './components/FallingPetals';
import Footer from './components/Footer';
import { weddingAudio } from './utils/weddingAudio';

export default function App() {
  // Main celebration website displays immediately on link open
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);

  // Auto-play Tum Mile - Love Reprise immediately on open
  useEffect(() => {
    weddingAudio.autoStart();
    const unsubscribe = weddingAudio.subscribe(({ isPlaying }) => {
      setIsMusicPlaying(isPlaying);
    });
    return unsubscribe;
  }, []);

  // Global listener: first click/tap anywhere unlocks and starts Tum Mile immediately
  useEffect(() => {
    if (isMusicPlaying) return;

    const handleGlobalInteraction = () => {
      weddingAudio.play().catch(() => {});
    };

    window.addEventListener('click', handleGlobalInteraction, { capture: true, passive: true });
    window.addEventListener('touchstart', handleGlobalInteraction, { capture: true, passive: true });
    window.addEventListener('pointerdown', handleGlobalInteraction, { capture: true, passive: true });

    return () => {
      window.removeEventListener('click', handleGlobalInteraction, { capture: true });
      window.removeEventListener('touchstart', handleGlobalInteraction, { capture: true });
      window.removeEventListener('pointerdown', handleGlobalInteraction, { capture: true });
    };
  }, [isMusicPlaying]);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    weddingAudio.play().catch(() => {});
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpen(false);
  };

  const handleToggleMusic = () => {
    weddingAudio.toggle();
  };

  const handleTogglePetals = () => {
    setPetalsEnabled(!petalsEnabled);
  };

  return (
    <div className="relative min-h-screen bg-ivory text-neutral-800 font-montserrat selection:bg-gold/30 selection:text-burgundy">
      
      {/* Optional Royal Wax Seal Envelope View */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <InvitationEnvelope onOpen={handleOpenEnvelope} />
        )}
      </AnimatePresence>

      {/* Floating Prompt if browser blocked initial silent autoplay */}
      {!isMusicPlaying && (
        <div 
          onClick={() => weddingAudio.play().catch(() => {})}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 cursor-pointer animate-pulse"
        >
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-burgundy-dark/95 text-gold-light border-2 border-gold shadow-2xl backdrop-blur-md text-xs sm:text-sm font-cinzel tracking-wider hover:scale-105 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
            <span>🎵 Tap anywhere to play "Tum Mile"</span>
          </div>
        </div>
      )}

      {/* Ambient Falling Rose & Marigold Petals */}
      <FallingPetals enabled={petalsEnabled} />

      {/* Luxury Navigation Bar */}
      <Navbar
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
        onReopenEnvelope={handleReopenEnvelope}
        petalsEnabled={petalsEnabled}
        onTogglePetals={handleTogglePetals}
      />

      {/* Main Royal Hero Section */}
      <Hero onExplore={() => {
        document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* A Little About Us / Two Hearts One Beautiful Journey */}
      <AboutStory />

      {/* Official Spotify Love Song Section ("Tum Mile - Love Reprise") */}
      <SpotifySongSection />

      {/* Wedding Festivities (Haldi, Mehendi, Sangeet, The Wedding) */}
      <Festivities />

      {/* The When & Where / Royal Heritage Palace, Jaipur */}
      <WhenAndWhere />

      {/* Moments to Remember / A Glimpse of the Magic (Gallery) */}
      <MomentsGallery />

      {/* Kindly Reply / RSVP Form */}
      <RSVP />

      {/* Sacred Blessings & Love Guestbook */}
      <BlessingsWall />

      {/* Luxury Floating "Tum Mile - Love Reprise" Player */}
      <MusicPlayer
        isPlaying={isMusicPlaying}
        onToggle={handleToggleMusic}
      />

      {/* Royal Wedding Footer */}
      <Footer />
    </div>
  );
}
