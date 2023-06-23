import React, { useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const videos = [
    {
      id: 1,
      url: "https://youtu.be/6stlCkUDG_s",
      thumbnail: "https://source.unsplash.com/random/?nature/"
    },
    {
      id: 2,
      url: "https://youtu.be/eg2g6FPsdLI",
      thumbnail: "https://source.unsplash.com/random/?sand/"
    },
    {
      id: 3,
      url: "https://youtu.be/4N8oOj_aue8",
      thumbnail: "https://source.unsplash.com/random/?flower/"
    },
    {
      id: 4,
      url: "https://youtu.be/oe70Uhjc_F4",
      thumbnail: "https://source.unsplash.com/random/?technology/"
    },
    {
      id: 5,
      url: "https://youtu.be/HccqokXN2n8",
      thumbnail: "https://source.unsplash.com/random/?waterfall/"
    },
    {
      id: 6,
      url: "https://youtu.be/Jh6jZftn2e0",
      thumbnail: "https://source.unsplash.com/random/?smartphone/"
    },
    {
      id: 7,
      url: "https://youtu.be/HHBsvKnCkwI",
      thumbnail: "https://source.unsplash.com/random/?drone/"
    },
    {
      id: 8,
      url: "https://youtu.be/NpdQkEPELh4",
      thumbnail: "https://source.unsplash.com/random/?village/"
    },
    {
      id: 9,
      url: "https://youtu.be/ZjbFDYoE-OY",
      thumbnail: "https://source.unsplash.com/random/?mountains/"
    },
    {
      id: 10,
      url: "https://youtu.be/SDzl9uB7j0s",
      thumbnail: "https://source.unsplash.com/random/?snowfall/"
    },
    {
      id: 11,
      url: "https://youtu.be/SDzl9uB7j0s",
      thumbnail: "https://source.unsplash.com/random/?moon/"
    },
    {
      id: 12,
      url: "https://youtu.be/CmCIZ_aUAeQ",
      thumbnail: "https://source.unsplash.com/random/?nature/"
    },
    {
      id: 13,
      url: "https://youtu.be/3176Sw8A0EE",
      thumbnail: "https://source.unsplash.com/random/?earth/"
    },
    {
      id: 14,
      url: "https://youtu.be/DP_NqOOeoao",
      thumbnail: "https://source.unsplash.com/random/?winter/"
    },
    {
      id: 15,
      url: "https://youtu.be/DP_NqOOeoao",
      thumbnail: "https://source.unsplash.com/random/?island/"
    }
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const handleThumbnailClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="video_player_container">
      <ReactPlayer
        url={currentVideo.url}
        controls={true}
        width="100%"
        height="60vh"
      />

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        {videos.map((video) => (
          <div
            key={video.id}
            style={{
              display: "inline-block",
              margin: "0 5px",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              overflow: "hidden"
            }}
            onClick={() => handleThumbnailClick(video)}
          >
            <img
              src={video.thumbnail}
              alt="Thumbnail"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
