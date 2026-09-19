import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, RotateCcw, Play, Pause } from 'lucide-react';

export default function VideoIntro() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [showSoundHint, setShowSoundHint] = useState(true);

  // Auto-hide "Tap for sound" badge after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowSoundHint(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Video Autoplay & IntersectionObserver
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startAutoplay = async () => {
      try {
        video.muted = true;
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Autoplay prevented:', err);
        setIsPlaying(false);
      }
    };

    startAutoplay();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return;
          if (entry.isIntersecting) {
            if (!video.ended && !video.paused) {
              video.play().catch(() => {});
              setIsPlaying(true);
            }
          } else {
            if (!video.paused) {
              video.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleVideoEnded = () => {
    setHasEnded(true);
    setIsPlaying(false);
    setShowSoundHint(false);
    if (videoRef.current) videoRef.current.pause();
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    setShowSoundHint(false);
  };

  const handleReplay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setHasEnded(false);
    video.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="hero-bg-video-container" ref={containerRef}>
      {/* Fullscreen background video */}
      <video
        ref={videoRef}
        src="/video/kiruthika-hero.mp4"
        className="hero-bg-video"
        playsInline
        muted={isMuted}
        autoPlay
        loop={false}
        preload="auto"
        onEnded={handleVideoEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        aria-label="Kiruthika R Introduction Video Background"
      />

      {/* Cinematic overlay gradient — keeps text readable */}
      <div className="hero-bg-video-overlay" />

      {/* Sound badge hint */}
      {showSoundHint && isMuted && !hasEnded && (
        <button
          className="sound-badge-hint"
          onClick={toggleSound}
          aria-label="Enable sound"
          type="button"
        >
          <div className="audio-bars" aria-hidden="true">
            <span className="audio-bar" />
            <span className="audio-bar" />
            <span className="audio-bar" />
            <span className="audio-bar" />
          </div>
          <span>Tap for sound</span>
        </button>
      )}

      {/* Video controls bottom-right */}
      <div className="video-controls-bar">
        {!hasEnded && (
          <button
            className="video-ctrl-btn"
            onClick={togglePlayPause}
            title={isPlaying ? 'Pause video' : 'Play video'}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            type="button"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        )}
        {hasEnded && (
          <button
            className="video-ctrl-btn"
            onClick={handleReplay}
            title="Replay intro"
            aria-label="Replay introduction video"
            type="button"
          >
            <RotateCcw size={16} />
          </button>
        )}
        <button
          className="video-ctrl-btn"
          onClick={toggleSound}
          title={isMuted ? 'Unmute video' : 'Mute video'}
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
          type="button"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
}
