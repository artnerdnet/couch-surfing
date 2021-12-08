import { TGalleryImage, TProperty } from "../../types/types";
import "./property.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ImagesCarousel from "../imageCarousel/imagesCarousel";
import ReviewCount from "../reviewCount/reviewCount";

const formatImages = (images: string[], alt: string): TGalleryImage[] | any =>
  images.map((image) => {
    return { original: image, alt };
  });

const Property: React.FunctionComponent<{ property: TProperty }> = ({
  property,
}) => {
  const {
    title,
    images,
    price,
    publicAddress,
    city,
    postcode,
    country,
    contactDetails,
    available,
    reviews,
  } = property;

  const formattedImages = formatImages(images, title);
  const formattedAddress = `${publicAddress}, ${city}, ${country}`;

  return (
    <div className="c-property__container">
      <div className="c-property__header">
        <h2>{title}</h2>
        <h3>Nearby: {formattedAddress}</h3>
        <h4>
          {price}€ per night, rented by {contactDetails.name}
        </h4>
      </div>
      <ImagesCarousel images={formattedImages} />
      <ReviewCount reviews={reviews} />
    </div>
  );
};

export default Property;
