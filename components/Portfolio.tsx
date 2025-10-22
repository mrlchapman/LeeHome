
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo, usePresence } from 'framer-motion';
import { PROJECTS_LIST } from '../constants';
import type { Project } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Play, Pause, ExternalLink, Code2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectShowcaseProps extends Project {
  index: number;
  isActive: boolean;
  totalProjects: number;
  direction: number;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  title,
  category,
  videoUrl,
  tagline,
  description,
  technologies,
  client,
  index,
  isActive,
  totalProjects,
  direction
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    if (videoRef.current && isActive) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, that's okay
      });
      setIsPlaying(true);
    } else if (videoRef.current && !isActive) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const isEven = index % 2 === 0;

  if (!isActive) return null;

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const [isPresent] = usePresence();

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.2 }
      }}
      className={`${!isPresent ? 'absolute inset-0' : 'relative'} w-full overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Diagonal Split Background */}
      <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-br' : 'bg-gradient-to-bl'} from-brand-primary/10 via-dark-bg to-dark-card`}></div>

      {/* Animated Border Gradient */}
      <div className="absolute inset-0 opacity-50">
        <div className={`absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-secondary to-purple-500 opacity-20 blur-3xl ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-700`}></div>
      </div>

      <div className={`relative flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'} items-center gap-4 lg:gap-12 p-4 lg:p-12`}>

        {/* Video Container */}
        <div className="w-full md:w-3/4 lg:w-1/2 relative group">
          <div className={`relative overflow-hidden rounded-3xl shadow-2xl border-2 ${isHovered ? 'border-brand-primary' : 'border-slate-700/50'} transition-all duration-500 ${isHovered ? 'scale-105 shadow-brand-primary/30' : 'scale-100'}`}>
            {/* Video Element */}
            {videoUrl && (
              <video
                ref={videoRef}
                className="w-full h-auto object-cover"
                loop
                muted
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {/* Video Overlay Controls */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              <button
                onClick={togglePlayPause}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-12 h-12 lg:w-20 lg:h-20 border-t-2 border-l-2 lg:border-t-4 lg:border-l-4 border-brand-primary rounded-tl-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 lg:w-20 lg:h-20 border-b-2 border-r-2 lg:border-b-4 lg:border-r-4 border-brand-secondary rounded-br-3xl opacity-50"></div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-3 -left-3 lg:-top-4 lg:-left-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-3 py-1 lg:px-6 lg:py-2 rounded-full shadow-lg flex items-center gap-1.5 lg:gap-2 animate-pulse">
            <Sparkles className="w-3 h-3 lg:w-4 lg:h-4" />
            <span className="font-semibold text-xs lg:text-sm">Featured Project</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-1/2 space-y-3 lg:space-y-6">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-primary/20 backdrop-blur-sm border border-brand-primary/30 text-brand-secondary px-3 py-1.5 lg:px-4 lg:py-2 rounded-full">
            <Code2 className="w-3 h-3 lg:w-4 lg:h-4" />
            <span className="text-xs lg:text-sm font-semibold uppercase tracking-wider">{category}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl lg:text-5xl font-bold text-white leading-tight">
            {title}
          </h3>

          {/* Tagline */}
          {tagline && (
            <p className="text-base sm:text-lg lg:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              {tagline}
            </p>
          )}

          {/* Client */}
          {client && (
            <div className="flex items-center gap-2 text-slate-400">
              <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
              <span className="text-xs lg:text-sm">Client: <span className="text-white font-medium">{client}</span></span>
            </div>
          )}

          {/* Description */}
          {description && (
            <p className="text-sm lg:text-lg text-slate-300 leading-relaxed">
              {description}
            </p>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="space-y-2 lg:space-y-3">
              <h4 className="text-xs lg:text-sm font-semibold text-slate-400 uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-1.5 lg:gap-2">
                {technologies.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 lg:px-4 lg:py-2 bg-dark-card/80 backdrop-blur-sm border border-slate-700/50 text-slate-300 rounded-lg text-xs lg:text-sm font-medium hover:border-brand-primary/50 hover:text-brand-secondary transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Decorative Line */}
          <div className="w-16 lg:w-24 h-0.5 lg:h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const totalProjects = PROJECTS_LIST.length;

  // Handle manual navigation
  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev: number) => (prev - 1 + totalProjects) % totalProjects);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev: number) => (prev + 1) % totalProjects);
  };

  // Handle drag/swipe
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold) {
      // Swiped right - go to previous
      goToPrevious();
    } else if (info.offset.x < -swipeThreshold) {
      // Swiped left - go to next
      goToNext();
    }
  };

  return (
    <section id="portfolio" className="pt-20 pb-12 lg:pt-32 lg:pb-16 bg-dark-bg relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 lg:mb-16 px-6 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 backdrop-blur-sm border border-brand-primary/20 text-brand-secondary px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Projects</span>
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Explore my recent work showcasing innovative web development, AI integration, and educational technology solutions that deliver real results.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-6 lg:px-12">
          {/* Projects Carousel */}
          <motion.div
            className="relative cursor-grab active:cursor-grabbing select-none touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          >
            <AnimatePresence initial={false} custom={direction}>
              {PROJECTS_LIST.map((project, index) => (
                index === currentIndex && (
                  <ProjectShowcase
                    key={project.id}
                    {...project}
                    index={index}
                    isActive={index === currentIndex}
                    totalProjects={totalProjects}
                    direction={direction}
                  />
                )
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {PROJECTS_LIST.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-brand-primary to-brand-secondary'
                    : 'w-3 h-3 bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="text-center mt-4">
            <span className="text-sm text-slate-500">
              {currentIndex + 1} / {totalProjects}
            </span>
            <p className="text-xs text-slate-600 mt-2 hidden sm:block">
              ← Drag or swipe to explore →
            </p>
            <p className="text-xs text-slate-600 mt-2 sm:hidden">
              ← Swipe to explore →
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 lg:mt-16 px-6 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          <p className="text-xl text-slate-300 mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold py-4 px-10 rounded-full hover:shadow-2xl hover:shadow-brand-primary/40 transition-all duration-300 transform hover:scale-105"
          >
            Let's Create Something Amazing
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
