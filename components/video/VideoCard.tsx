import React from 'react';
import { Play } from 'lucide-react';
import type { YouTubeVideo } from '../../types';

interface VideoCardProps {
  video: YouTubeVideo;
  onClick?: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer glass-panel rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-primary/10"
    >
      <div className="relative aspect-video">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white line-clamp-2 group-hover:text-brand-secondary transition-colors">
          {video.title}
        </h3>
        <p className="text-sm text-slate-400 mt-2 line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
