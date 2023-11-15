import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleEdit}) {
  const [viewReviewForm, setReviewForm] = useState(false);
  const toggleView = () => {
    setEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      {viewEditForm} ? (
        <>
        <ReviewForm
          reviewDetails={review}
          togglleView={toggleView}
          handleSubmit={handleEdit}
        />
        <button onClick={toggleView}>
          {viewEditForm ? "Cancel" : "Edit this review"}
        </button>
        </>
      ) : (
        <>
        <h4>
          {review.title}
          <span>{review.rating}</span>
        </h4>
        <h5>{review}</h5>
        <button onClick={toggleView}>
          {viewEditForm ? "Cancel" : "Edit this review"} 
        </button>
        <button onClick={() => handleDelete(review.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Review;