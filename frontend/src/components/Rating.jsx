import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const maxRating = 5

const Rating = ({ rating, numReviews }) => {
  
  // https://stackoverflow.com/a/54303154
  const getRatingStars = () => {
    return [...Array(maxRating)].map((value, index) =>
      // Checks if current star should be half
      index < rating && index + 1 > rating ? (
        <FaStarHalfAlt key={index} />
      ) : // Checks if current star should be full
      index < rating ? (
        <FaStar key={index} />
      ) : (
        // Otherwise empty star
        <FaRegStar key={index} />
      )
    );
  };

  return (
    <div className="rating">
      {getRatingStars().map((stars, index) => (
        <span key={index}>{stars}</span>
      ))}
      <span className="rating-text">{numReviews} Reviews</span>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number,
  numReviews: PropTypes.number
}

export default Rating