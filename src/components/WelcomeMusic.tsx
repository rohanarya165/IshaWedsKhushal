import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const WelcomeMusic = () => {
  const [showModal, setShowModal] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/audio/audio.mp3'));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = 0.4;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const handleStartMusic = () => {
    const audio = audioRef.current;
    audio.play();
    setShowModal(false);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  const skipMusic = () => setShowModal(false);

  useEffect(() => {
    const handleEsc = (e : any) => e.key === 'Escape' && setShowModal(false);
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  if (showModal) {
    return (
      <>
        <div className="welcome-overlay" onClick={skipMusic} />
        <div className="welcome-modal">
          <div className="welcome-content">
            <h1>Welcome</h1>
            <br />
            <button onClick={handleStartMusic} className="start-btn">
               Start 
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <button className="music-btn" onClick={toggleMusic} title="Toggle wedding music">
      {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
    </button>
  );
};

export default WelcomeMusic;
