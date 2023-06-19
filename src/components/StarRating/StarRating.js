import { useState } from 'react';
import './StarRating.scss';
import '../../fonts/fonts.scss';
import { Rating } from 'react-simple-star-rating';
import star from './pictures/Star.svg'
import Vector from './pictures/Vector.svg'


const StarRating = () => {

  ///If the rating is equal to 5, numRatings is incremented by 1.
  const [ratingValue, setRatingValue] = useState(0);
  const [numRatings, setNumRatings] = useState(0);

  const handleRating = (rate) => {
    setRatingValue(rate);
    if (rate === 5) {
      setNumRatings((prevNumRatings) => prevNumRatings + 1);
    }
  };

  return (
    <div className='star__rating'>
      <p>Excellent</p>
      <Rating 
        onClick={handleRating}
        initialValue="4.5"
        allowFraction={true} 
        fillClassName="fill"
        emptyClassName="empty"
        fillColor="#FFFFFF"
        size="16"
      />
      <p>{numRatings} reviews on </p>
      <div className='img__vector'> 
        <img src={star} alt=''/> 
        <img src={Vector} alt=''/>
      </div>
    </div>
  );
};

export default StarRating;