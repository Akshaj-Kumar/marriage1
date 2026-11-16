/**
 * Wedding Audio Engine - Exclusively for "Tum Mile - Love Reprise"
 * 
 * Works across local dev and GitHub Pages subpaths!
 * Auto-plays smoothly on load and on very first user interaction!
 */

class WeddingAudioEngine {
  constructor() {
    this.audioElement = null;
    this.ctx = null;
    this.isPlaying = false;
    this.listeners = new Set();
    this.initialized = false;
  }

  getAudioSrc() {
    // Dynamically resolve base URL so it works on both localhost and https://akshaj-kumar.github.io/marriage1/
    const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) 
      ? import.meta.env.BASE_URL 
      : './';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    return `${cleanBase}audio/tum-mile.mp3`;
  }

  init() {
    if (this.initialized) return;
    this.initialized = true;

    if (!this.audioElement && typeof window !== 'undefined') {
      this.audioElement = new Audio();
      this.audioElement.src = this.getAudioSrc();
      this.audioElement.loop = true;
      this.audioElement.preload = 'auto';

      this.audioElement.addEventListener('playing', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener('error', (e) => {
        console.warn('Audio element error with path:', this.audioElement.src, e);
      });
    }

    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb({ isPlaying: this.isPlaying }));
  }

  // Automatic playback starter
  autoStart() {
    this.init();

    // 1. Try immediate playback
    this.play().catch(() => {
      // 2. Browser blocked unprompted autoplay -> trigger on very first gesture
      const unlockAndPlay = () => {
        if (!this.isPlaying) {
          this.play();
        }
        window.removeEventListener('pointerdown', unlockAndPlay);
        window.removeEventListener('touchstart', unlockAndPlay);
        window.removeEventListener('click', unlockAndPlay);
        window.removeEventListener('scroll', unlockAndPlay);
        window.removeEventListener('keydown', unlockAndPlay);
      };

      window.addEventListener('pointerdown', unlockAndPlay, { once: true, passive: true });
      window.addEventListener('touchstart', unlockAndPlay, { once: true, passive: true });
      window.addEventListener('click', unlockAndPlay, { once: true, passive: true });
      window.addEventListener('scroll', unlockAndPlay, { once: true, passive: true });
      window.addEventListener('keydown', unlockAndPlay, { once: true, passive: true });
    });
  }

  async play() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      await this.ctx.resume().catch(() => {});
    }

    if (this.audioElement) {
      try {
        await this.audioElement.play();
        this.isPlaying = true;
        this.notify();
      } catch (err) {
        // Return rejection to let caller or autoStart handle gesture fallback
        throw err;
      }
    }
  }

  pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isPlaying = false;
    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play().catch(() => {});
    }
  }

  // Royal bell chime for interactive buttons
  playRoyalChime() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      if (!this.ctx) return;

      const notes = [587.33, 739.99, 880, 1174.66];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + (idx * 0.08);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.85);
      });
    } catch {}
  }
}

export const weddingAudio = new WeddingAudioEngine();
