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
