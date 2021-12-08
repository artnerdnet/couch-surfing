import { TGalleryImage } from "../../types/types";
import "./property.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ImagesCarousel from "../imageCarousel/imagesCarousel";
import ReviewCount from "../reviewCount/reviewCount";
import { IProperty } from "../../types/interfaces";

const formatImages = (images: string[], alt: string): TGalleryImage[] =>
  images.map((image) => {
    return { original: image, alt };
  });

const Property: React.FunctionComponent<{ property: IProperty }> = ({
  property,
}) => {
  const {
    title,
    images,
    price,
    publicAddress,
    city,
    country,
    contactDetails,
    available,
    reviews,
  } = property;

  const formattedImages = formatImages(images, title);
  const formattedAddress = `${publicAddress}, ${city}, ${country}`;

  return (
    <>
      <div className="c-property__container">
        <div className="c-property__header">
          <h2>{title}</h2>
          <h3>Nearby: {formattedAddress}</h3>

          <div className="c-property__rentInfo">
            <h4>
              {price}€ per night, rented by {contactDetails.name}
            </h4>
            <span
              className={
                available ? "c-property__flag" : "c-property__flag unavailable"
              }
            >
              {available ? "available" : "unavailable"}
            </span>
          </div>
        </div>
        <ImagesCarousel images={formattedImages} />

        <div className="c-property__contact">
          <ReviewCount reviews={reviews} />
          <a href={`mailto:${contactDetails.email}`}>
            <button>contact by email</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Property;
