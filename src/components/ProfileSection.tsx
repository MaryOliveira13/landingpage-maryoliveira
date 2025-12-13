import { ChevronDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-mary.jpg';

const ProfileSection = () => {
  const scrollToLinks = () => {
    const linksSection = document.getElementById('links-section');
    linksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-8 pb-16">
      {/* Name */}
      <h2 className="font-montserrat text-base tracking-[0.3em] text-foreground/80 mb-6">
        MARY OLIVEIA
      </h2>

      {/* Profile Photo */}
      <div className="relative mb-8 group">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-magenta to-secondary blur-2xl opacity-60 scale-110 animate-pulse-glow" />
        
        {/* Photo container */}
        <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-primary/50 transition-all duration-300 group-hover:blur-[2px]">
          <img
            src={profilePhoto}
            alt="Mary Oliveia"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main headline */}
      <div className="text-center mb-8 px-4">
        <h1 className="font-montserrat text-sm md:text-4xl font-medium text-foreground mb-0 md:mb-2 whitespace-nowrap">
          Transforme o seu E-commerce
        </h1>
        <p className="font-montserrat text-xl md:text-5xl font-extrabold gradient-text whitespace-nowrap">
          COM VISUAL QUE VENDE!
        </p>
      </div>

      {/* Saiba Mais button */}
      <button
        onClick={scrollToLinks}
        className="group relative flex items-center gap-2 md:gap-3 px-6 py-2 md:px-8 md:py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
      >
        {/* Border gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-[2px]">
          <div className="h-full w-full rounded-full bg-background/80 backdrop-blur-sm" />
        </div>
        
        {/* Content */}
        <span className="relative z-10 font-montserrat text-sm tracking-wider text-foreground">
          SAIBA MAIS
        </span>
        <ChevronDown className="relative z-10 w-4 h-4 text-primary group-hover:translate-y-1 transition-transform duration-300" />
      </button>
    </section>
  );
};

export default ProfileSection;
