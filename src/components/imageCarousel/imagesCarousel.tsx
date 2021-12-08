import "./imagesCarousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TGalleryImage } from "../../types/types";

interface TImagesCarouselProps {
  images: TGalleryImage[];
  showThumbs?: boolean;
}

const ImagesCarousel: React.FunctionComponent<TImagesCarouselProps> = ({
  images,
  showThumbs = false,
}) => (
  <Carousel showThumbs={showThumbs}>
    {images.map((image) => (
      <img className="c-imagesCarousel" src={image.original} alt={image.alt} />
    ))}
  </Carousel>
);

export default ImagesCarousel;
