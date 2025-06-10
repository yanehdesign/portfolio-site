import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FullWidthCarousel({ images }: { images: string[] }) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
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
        style={{ borderRadius: "1rem" }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full max-h-[60vh] object-contain rounded bg-white"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom arrows below carousel */}
      <div className="flex justify-center gap-4 mt-4">
        <button ref={prevRef} className="p-2 bg-gray-200 rounded-full" aria-label="Previous">
          &#8592;
        </button>
        <button ref={nextRef} className="p-2 bg-gray-200 rounded-full" aria-label="Next">
          &#8594;
        </button>
      </div>
    </div>
  );
}