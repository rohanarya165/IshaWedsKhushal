import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/audio/audio.mp3'));

  // Auto-play on mount
  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.5; // Optional: lower volume
    audio.play().catch(e => console.log('Autoplay prevented:', e));
    setIsPlaying(true);
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button className="music-btn" onClick={togglePlayPause}>
      {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
    </button>
  );
};

export default MusicButton;
