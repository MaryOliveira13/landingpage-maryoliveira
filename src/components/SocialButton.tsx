import { ReactNode } from 'react';

interface SocialButtonProps {
  icon: ReactNode;
  label: string;
  href: string;
}

const SocialButton = ({ icon, label, href }: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center gap-4 w-full max-w-[280px] md:max-w-sm mx-auto overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Background with gradient border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-magenta to-secondary p-[2px]">
        <div className="h-full w-full rounded-xl bg-background/90 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-3 md:gap-4 w-full px-4 py-3 md:px-6 md:py-4">
        {/* Icon container with gradient background */}
        <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/50 group-hover:from-primary/50 group-hover:to-secondary/50 transition-all duration-300">
          <div className="text-foreground group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Label */}
        <span className="font-montserrat font-bold text-base md:text-lg tracking-wider text-foreground">
          {label}
        </span>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl" />
      </div>
    </a>
  );
};

export default SocialButton;
