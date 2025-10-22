import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ProfileCard from './ProfileCard';

const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML APIs', 'UI/UX Design', 'Supabase'];

const About: React.FC = () => {
    const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
    
    const handleContactClick = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="about" className="py-20 lg:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-opacity duration-1000 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className={`flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 transition-all duration-700 ease-out ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="lg:w-1/3 flex justify-center">
             <ProfileCard
                name="Lee Chapman"
                title="Digital Product Creator"
                handle="leechapman"
                status="Building the Future"
                contactText="Get In Touch"
                avatarUrl="images/Profile.png"
                miniAvatarUrl="images/Desk.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={handleContactClick}
            />
          </div>
          <div className="lg:w-2/3 max-w-2xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg text-slate-300 mb-6">
              I'm a passionate digital creator specializing in bridging the gap between innovative design and intelligent technology. With a background in full-stack development and a keen eye for user experience, I build AI-driven applications and websites that are not only functional but also delightful to use. My goal is to transform complex problems into elegant, simple solutions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skills.map((skill) => (
                <span key={skill} className="bg-dark-card text-brand-secondary text-sm font-medium px-4 py-2 rounded-full border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
