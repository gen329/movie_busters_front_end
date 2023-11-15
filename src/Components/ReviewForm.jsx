import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm({ reviewDetails, handleSuubmit, toggleView, children}) {
  let { id } = useParams();
  
  const [review, setReview] = useState({
    movie_id: "",
    user_id: "",
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
      movie_id: "",
      user_id: "",
      rating: 0,
      comment: "",
    });
    console.log("what's happening")
  };

  return(
    <div className="Edit">
      {children}
      <form onSubmit={onSubmit}>
        <label htmlFor="movie_id">Movie Title:</label>
        <input
          id="movie_title"
          value={review.title}
          type="text"
          onChange={handleTextChange}
          required
          />
          <br/>
        <label htmlFor="user_id">Username:</label>
        <input
          id="reviewer"
          value={review.user_id}
          type="text"
          onChange={handleTextChange}
          />
          <br/>
        <label htmlFor="rating">What would you rate this movie?</label> 
        <input
          id="rating"
          value={review.rating}
          type="text"
          onChange={handleTextChange}
          required
          />
          <br/>
         <label htmlFor="comment">Comments:</label>
         <input
          id="comment"
          value={review.comment}
          type="text"
          onChange={handleTextChange}
          />
          <br/>
          <input type="submit" />
      </form>
    </div>
  );
}

export default ReviewForm;