import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Types
interface FullWidthCarouselProps {
  images: string[];
}

export default function FullWidthCarousel({ images }: FullWidthCarouselProps) {
  // Navigation refs
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ 
          clickable: true,
          bulletActiveClass: 'bg-burgundy opacity-100',
          bulletClass: 'swiper-pagination-bullet bg-rose opacity-50'
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="rounded-xl"
      >
        {/* Image Slides */}
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="aspect-video bg-cream rounded-xl overflow-hidden shadow-md">
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button 
          ref={prevRef} 
          className="p-3 bg-cream hover:bg-rose/20 rounded-full transition-colors shadow-sm"
          aria-label="Previous slide"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            className="text-burgundy"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>
        <button 
          ref={nextRef} 
          className="p-3 bg-cream hover:bg-rose/20 rounded-full transition-colors shadow-sm"
          aria-label="Next slide"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            className="text-burgundy"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
}