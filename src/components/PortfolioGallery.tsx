import art1 from '@/assets/portfolio/new-1.png';
import art2 from '@/assets/portfolio/new-2.png';
import art3 from '@/assets/portfolio/new-3.png';
import art4 from '@/assets/portfolio/new-4.png';
import art5 from '@/assets/portfolio/new-5.png';
import art6 from '@/assets/portfolio/new-6.png';
import art7 from '@/assets/portfolio/new-7.png';
import art8 from '@/assets/portfolio/new-8.png';
import art9 from '@/assets/portfolio/new-9.png';
import art10 from '@/assets/portfolio/new-10.png';
import art11 from '@/assets/portfolio/new-11.png';
import art12 from '@/assets/portfolio/new-12.png';
import art13 from '@/assets/portfolio/new-13.png';
import art14 from '@/assets/portfolio/new-14.png';
import art15 from '@/assets/portfolio/new-15.png';

const portfolioImages = [
  { src: art1, alt: 'Embalagem Premium StarBem' },
  { src: art2, alt: 'Calçados AB' },
  { src: art3, alt: 'Vale Massagem' },
  { src: art4, alt: 'StarBem Fitness' },
  { src: art5, alt: 'Comer a Noite' },
  { src: art6, alt: 'Carregador Magsafe Apple' },
  { src: art7, alt: 'Rei das TVs Black Friday' },
  { src: art8, alt: 'Suco Del Valle' },
  { src: art9, alt: 'Rede Açaí Menu' },
  { src: art10, alt: 'Vênus Gel de Massagem' },
  { src: art11, alt: 'Red Bull Energy' },
  { src: art12, alt: 'Mitos da Nutrição' },
  { src: art13, alt: 'Outubro Rosa Rei das TVs' },
  { src: art14, alt: 'Fone Esportivo Bluetooth' },
  { src: art15, alt: 'Esquenta Black Friday' },
];

const PortfolioGallery = () => {
  const firstRow = portfolioImages.slice(0, 8);
  const secondRow = portfolioImages.slice(8, 15);

  return (
    <div className="w-full overflow-hidden py-8">
      {/* First row */}
      <div 
        className="flex gap-4 mb-4"
        style={{
          transform: 'perspective(1000px) rotateX(5deg)',
          transformOrigin: 'center center',
        }}
      >
        <div className="flex gap-4 animate-scroll-left">
          {[...firstRow, ...firstRow, ...firstRow].map((img, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-32 h-44 md:w-40 md:h-56 rounded-sm md:rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-300 group-hover:blur-[2px]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom icons */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-foreground/80 text-xs opacity-60">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second row */}
      <div 
        className="flex gap-4"
        style={{
          transform: 'perspective(1000px) rotateX(5deg)',
          transformOrigin: 'center center',
        }}
      >
        <div className="flex gap-4 animate-scroll-right">
          {[...secondRow, ...secondRow, ...secondRow].map((img, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-32 h-44 md:w-40 md:h-56 rounded-sm md:rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-300 group-hover:blur-[2px]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Bottom icons */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-foreground/80 text-xs opacity-60">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery;
