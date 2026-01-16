import React, { useState } from 'react';
import { Youtube, Play, ExternalLink } from 'lucide-react';
import YouTubeEmbed from './YouTubeEmbed';
import VideoCard from './VideoCard';
import type { YouTubeVideo } from '../../types';

// TODO: Replace these placeholder videos with your actual YouTube content
// To get video IDs, go to your YouTube video and copy the ID from the URL:
// e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID is "dQw4w9WgXcQ"
const FEATURED_VIDEOS: YouTubeVideo[] = [
  {
    id: 'dQw4w9WgXcQ', // Replace with your featured video ID
    title: 'Your Featured Tutorial Title',
    description: 'A brief description of what this tutorial covers and what viewers will learn.',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: 'dQw4w9WgXcQ', // Replace with another video ID
    title: 'Another Great Tutorial',
    description: 'Description of another tutorial you have created.',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    id: 'dQw4w9WgXcQ', // Replace with another video ID
    title: 'Third Video Title',
    description: 'Description for your third featured video.',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
];

// TODO: Replace with your actual YouTube channel URL
const YOUTUBE_CHANNEL_URL = '#'; // e.g., 'https://youtube.com/@YourChannel'

const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo>(FEATURED_VIDEOS[0]);

  return (
    <section id="content" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
            <Youtube className="w-5 h-5 text-red-500" />
            <span className="text-red-400 font-medium">YouTube Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tutorials & <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Learn how to build amazing digital products with my in-depth tutorials and behind-the-scenes content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Video - Large */}
          <div className="lg:col-span-2">
            <div className="glass-panel rounded-2xl overflow-hidden">
              <YouTubeEmbed
                videoId={activeVideo.id}
                title={activeVideo.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{activeVideo.title}</h3>
                <p className="text-slate-400">{activeVideo.description}</p>
              </div>
            </div>
          </div>

          {/* Video List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">More Videos</h3>
            {FEATURED_VIDEOS.map((video, index) => (
              <div
                key={video.id + index}
                onClick={() => setActiveVideo(video)}
                className={`group cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                  activeVideo.id === video.id && activeVideo.title === video.title
                    ? 'bg-brand-primary/20 border border-brand-primary/40'
                    : 'glass-panel hover:bg-dark-card/80'
                }`}
              >
                <div className="flex gap-4">
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <Play className="w-6 h-6 text-white" fill="white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-white text-sm line-clamp-2 group-hover:text-brand-secondary transition-colors">
                      {video.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}

            {/* Subscribe CTA */}
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 mt-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors duration-300"
            >
              <Youtube className="w-5 h-5" />
              Subscribe on YouTube
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
