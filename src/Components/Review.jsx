import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleEdit }) {
  const [viewReviewForm, setReviewForm] = useState(false);
  
  const toggleView = () => {
    setReviewForm(!viewReviewForm);
  };

  return (
    <div className="reviews">
      {viewReviewForm ? (
        <>
          <ReviewForm
            reviewDetails={review}
            toggleView={toggleView}
            handleSubmit={handleEdit}
          />
          <button onClick={toggleView}>
            {viewReviewForm ? "Cancel" : "Edit this review"}
          </button>
        </>
      ) : (
        <>
          <h4 className="review2">
            User Review {review.title}
          </h4>
          <h5>COMMENT: {review.comment}</h5>
            <span className="rating">RATING:{review.rating}</span>
            <br/>
          <button onClick={toggleView}>
            {viewReviewForm ? "Cancel" : "Edit this review"}
          </button>
          <button onClick={() => handleDelete(review.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Review;
