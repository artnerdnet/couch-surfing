import { TReview } from "../../types/types";
import LoyaltyUserLogo from "../../assets/seal.png";
import "./reviewCount.css";
import { calculateAverage, getReviewsData } from "../../utils/helpers";

const ReviewCount: React.FunctionComponent<{ reviews: TReview[] }> = ({
  reviews,
}) => {
  const formattedReviews = getReviewsData(reviews);
  const averageScore = calculateAverage(reviews.map((review) => review.stars));
  return (
    <div className="c-reviewCount__container">
      <h5 id="reviews">
        Total reviews: {formattedReviews.count} | Average score: {averageScore}{" "}
      </h5>
      <div className="c-reviewCount__lastReview">
        <span>Last review by {formattedReviews.latestReview.name}</span>
        {formattedReviews.latestReview.loyaltyUser && (
          <img
            className="c-reviewCount__loyaltyIndicator"
            src={LoyaltyUserLogo}
            alt="loyalty user"
          />
        )}
      </div>
    </div>
  );
};

export default ReviewCount;
