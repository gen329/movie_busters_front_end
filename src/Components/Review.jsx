import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleEdit }) {
  const [viewReviewForm, setReviewForm] = useState(false);
  
  const toggleView = () => {
    setReviewForm(!viewReviewForm);
  };

  return (
    <div className="Review">
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
          <h4>
            {review.title}
            <span>{review.rating}</span>
          </h4>
          <h5>{review.comment}</h5>
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
