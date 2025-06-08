import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx} className="w-full">
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-auto object-cover rounded border-4 border-[var(--color-4)]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FullWidthCarousel;