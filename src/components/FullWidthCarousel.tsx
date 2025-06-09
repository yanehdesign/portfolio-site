import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom Arrow Component
const Arrow = ({ style, onClick, direction }: any) => (
  <button
    className={`absolute top-1/2 z-10 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow
      ${direction === 'left' ? 'left-12' : 'right-12'}`}
    style={{ ...style }}
    onClick={onClick}
  >
    {direction === 'left' ? <FaChevronLeft size={50} /> : <FaChevronRight size={50} />}
  </button>
);

const FullWidthCarousel = ({ images }: { images: string[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    adaptiveHeight: true,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full relative px-0 sm:px-4">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="w-full flex justify-center relative">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full max-h-[60vh] object-contain rounded"
              style={{ background: "#fff" }}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullWidthCarousel;