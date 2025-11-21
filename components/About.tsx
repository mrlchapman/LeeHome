import React from 'react';
import ProfileCard from './ProfileCard';

const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML APIs', 'UI/UX Design', 'Supabase'];

const About: React.FC = () => {
  const handleContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24  relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
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
          </div>
          <div className="lg:w-2/3 max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              I'm a passionate digital creator specializing in bridging the gap between innovative design and intelligent technology. With a background in full-stack development and a keen eye for user experience, I build AI-driven applications and websites that are not only functional but also delightful to use. My goal is to transform complex problems into elegant, simple solutions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {skills.map((skill) => (
                <span key={skill} className="bg-white/5 text-brand-secondary text-sm font-medium px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-300">
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
