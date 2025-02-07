'use client';

import React, { useEffect, useRef } from "react";
import axios from "axios";
import Player from '@vimeo/player';

const ACCESS_TOKEN = `4b3270ac10ec6cf9efbd16dbee4f2f21`; // Replace with your Vimeo API token.

interface VimeoVideoProps {
  videoId: string;
}

const VimeoVideo: React.FC<VimeoVideoProps> = ({ videoId }) => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        await axios.get(
          `https://api.vimeo.com/videos/${videoId}`,
          {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
      } catch (error) {
        if (axios.isAxiosError(error) && error.response && error.response.status === 429) {
          // Retry logic - delay for a minute (60000ms) before retrying
          setTimeout(fetchVideoDetails, 60000);
        } else {
          console.error('Error fetching video details:', error);
        }
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  useEffect(() => {
    if (videoRef.current) {
      const player = new Player(videoRef.current, {
        id: parseInt(videoId, 10), // Vimeo video ID
        width: 640,
      });

      player.on('play', () => {
        console.log('Video is playing!');
      });
    }
  }, [videoId]);

  return (
    <div className="video-container">
      <div ref={videoRef} className="video-player"></div>
    </div>
  );
};

export default VimeoVideo;