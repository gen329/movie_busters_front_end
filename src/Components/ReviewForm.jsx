import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm({ reviewDetails, handleSuubmit, toggleView, children}) {
  let { id } = useParams();
  
  const [review, setReview] = useState({
    movie_id: id,
    user_id: id,
    rating: 0,
    comment: "",
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value});
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSuubmit(review, id);
    if (reviewDetails) {
      toggleView();
    }
    setReview({
      movie_id: id,
      user_id: id,
      rating: 0,
      comment: "",
    });
    console.log("what's happening")
  };

  return(
    <div className="Edit">
      {children}
      <form onSubmit={onSubmit}>
        <label htmlFor="reviewer">Name:</label>
        <input
          id="reviewer"
          value={review.user_id}
          type="text"
          onChange={handleTextChange}
          required
          />
          <input type="submit" />
      </form>
    </div>
  );
}

export default ReviewForm;