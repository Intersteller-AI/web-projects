import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay , butt_size=40}) => (isPlaying && activeSong?.title === song.title ? (
  <FaPauseCircle
    size={butt_size}
    className="text-gray-300"
    onClick={handlePause}
  />
) : (
  <FaPlayCircle
    size={butt_size}
    className="text-gray-300"
    onClick={handlePlay}
  />
));

export default PlayPause;