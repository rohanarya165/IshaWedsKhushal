import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/audio/audio.mp3'));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.5;
    
    const handleCanPlay = () => {
      audio.play().catch(e => console.log('Autoplay prevented:', e));
    };
    
    audio.addEventListener('canplaythrough', handleCanPlay);
    
    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
    };
  }, []);

  // Listen to actual audio events to sync state
  useEffect(() => {
    const audio = audioRef.current;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handlePause);
    
    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handlePause);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log('Play failed:', e));
    }
  };

  return (
    <button className="music-btn" onClick={togglePlayPause}>
      {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
    </button>
  );
};

export default MusicButton;
