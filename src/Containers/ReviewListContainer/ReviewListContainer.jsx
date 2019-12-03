import React, { useState , useEffect } from 'react';

import ReviewComponent from '../../Components/ReviewComponent';

import PostCalls from '../../calls/PostsCalls';

function ReviewListContainer() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await PostCalls.getPosts({categories: 77});
      console.log('result', result);
      setReviews(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="ReviewListContainer">
      {reviews.map(review => (
        <ReviewComponent
          key={review.id}
          title={review.title.rendered}
          description={review.excerpt.rendered}
          image={review.jetpack_featured_media_url}
        />
      ))}
    </div>
  );
}

export default ReviewListContainer;