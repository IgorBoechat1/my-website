'use client';

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import  Player  from '@vimeo/player';

const ACCESS_TOKEN = `4b3270ac10ec6cf9efbd16dbee4f2f21`; // Replace with your Vimeo API token.

const VimeoVideo = ({ videoId }: { videoId: string }) => {
  const videoRef = useRef<HTMLDivElement>(null);
  interface VideoDetails {
    name: string;
    description: string;
  }
  
  const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
            `https://api.vimeo.com/videos/${videoId}`,
            {
              headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
              },
            }
          );
          setVideoDetails(response.data);
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

      player.on("play", () => {
        console.log("Video is playing!");
      });

      return () => {
        player.destroy(); // Clean up on component unmount
      };
    }
  }, [videoId]);

  return (
    <div className="video-container">
      <div ref={videoRef} className="video-player"></div>
    </div>
      
      );
    };
  

export default VimeoVideo;
