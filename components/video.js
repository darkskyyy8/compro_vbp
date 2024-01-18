import React, { useRef, useState } from "react";

const Video = ({ src, width, height }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoStarted, setIsVideoStarted] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isVideoStarted) {
      videoRef.current.play();
      setIsVideoStarted(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current.pause();
  };

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="video-container"
      style={{
        position: "relative",
        overflow: "hidden",
        transition: "filter 0.3s ease",
        borderRadius: "8px", // Nilai pembulatan yang dapat disesuaikan
        filter: isHovered ? "blur(0)" : "blur(10px)",
        width: `${width}px`,
        height: `${height}px`,
        margin: "16px", // Jarak antar video
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        controls={false}
        className="video-element"
        style={{ borderRadius: "8px" }}
        onClick={handleVideoClick}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const VideoGallery = ({ data }) => {
  return (
    <div className="flex">
      {data
        ? data.map((a) => (
            <Video
              width={200}
              height={1000}
              src={
                "https://vbp-com.preview-domain.com/public/storage/" + a.video
              }
              key={a.id}
            />
          ))
        : ""}
    </div>
  );
};

export default VideoGallery;
