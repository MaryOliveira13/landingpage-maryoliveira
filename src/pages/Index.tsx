import ParticleBackground from '@/components/ParticleBackground';
import ProfileSection from '@/components/ProfileSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import LinksSection from '@/components/LinksSection';

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated particle background */}
      <ParticleBackground />
      
      {/* Profile section with photo and headline */}
      <ProfileSection />
      
      {/* Portfolio gallery with 3D perspective */}
      <section className="relative z-10 -mt-24 md:-mt-8">
        <PortfolioGallery />
      </section>
      
      {/* Social links section */}
      <LinksSection />
      
      {/* Footer spacing */}
      <div className="h-16" />
    </main>
  );
};

export default Index;
