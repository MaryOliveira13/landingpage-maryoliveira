const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-[#000000]" />
      
      {/* Purple/Pink glow spots */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-glow/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/15 rounded-full blur-[100px]" />
      <div className="absolute top-3/4 left-1/4 w-64 h-64 bg-magenta/10 rounded-full blur-[80px]" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
    </div>
  );
};

export default ParticleBackground;
