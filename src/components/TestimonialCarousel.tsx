import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import testimonial1 from '@/assets/testimonials/testimonial-1.jpg';
import testimonial2 from '@/assets/testimonials/testimonial-2.jpg';
import testimonial3 from '@/assets/testimonials/testimonial-3.jpg';
import testimonial4 from '@/assets/testimonials/testimonial-4.jpg';
import testimonial5 from '@/assets/testimonials/testimonial-5.jpg';

const testimonials = [
  { src: testimonial1, alt: 'Depoimento de Larissa F' },
  { src: testimonial2, alt: 'Depoimento de Camila Torres' },
  { src: testimonial3, alt: 'Depoimento de Fabio Almeida' },
  { src: testimonial4, alt: 'Depoimento de João Santos' },
  { src: testimonial5, alt: 'Depoimento de Roberto Arte Pão' },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="flex items-center justify-center gap-4 w-full max-w-sm">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div className="relative w-52 md:w-60 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={testimonials[currentIndex].src}
            alt={testimonials[currentIndex].alt}
            className="w-full h-auto transition-opacity duration-300"
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          aria-label="Próximo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-primary w-4' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
