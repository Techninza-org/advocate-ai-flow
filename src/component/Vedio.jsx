import { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(true); // Start with true for autoplay
  const videoRef = useRef(null);

  // Auto-play when component mounts
  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      
      // Handle cases where autoplay might be blocked by browser
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          setIsPlaying(false);
          console.error("Autoplay prevented:", error);
        });
      }
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      const playPromise = videoRef.current.play();
      
      // Handle cases where play might be blocked
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Play prevented:", error);
        });
      }
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full mt-28 mb-10">
      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-[500px] max-h-screen object-cover"
        onClick={togglePlayPause}
        loop
        muted // Adding muted helps with autoplay in some browsers
        playsInline // Helps with mobile browsers
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  bg-white bg-opacity-50 text-blue-800 rounded-full p-4 hover:bg-opacity-70
                  transition-all duration-200 focus:outline-none"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Optional: Show play/pause status text */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm">
        {isPlaying ? 'Playing' : 'Paused'}
      </div>
    </div>
  );
};

export default VideoPlayer;