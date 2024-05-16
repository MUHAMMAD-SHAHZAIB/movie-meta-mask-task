import React from "react";

function VideoPlayer({ autoplay }) {
  return (
    <video controls={true} autoPlay={autoplay} loop className="w-full">
      <source
        src="https://staging.api.moviemint.net/uploads/video/admin/video1.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default VideoPlayer;
