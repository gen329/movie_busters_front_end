import { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;

function ReviewForm({ reviewDetails, handleSubmit, children}) {
  let { id } = useParams();
  
  const [review, setReview] = useState({
    title: "",
    user_id: "",
    rating: 0,
    comment: "",
  });

  useEffect(() => {
    fetch(`${API}/movies/${id}/reviews`)
    .then((response) => response.json())
    .then((responseJSON) => {
      setReview(responseJSON.allReviews)
    })
    .catch((error) => console.log(error));
  }, [id,API]);

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
    handleSubmit(review, id);
    if (reviewDetails) {
      Navigate(`${API}/movies/${id}/reviews`);
    }
    setReview({
      title: "",
      user_id: "",
      rating: 0,
      comment: "",
    });
  };

  return(
    <div className="review">
      {children}
      <form onSubmit={onSubmit} className="columns">
        <label htmlFor="movie_id">Movie Title:</label>
        <input
          id="movie_title"
          value={review.title}
          type="text"
          onChange={handleTextChange}
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
        <label htmlFor="rating">What would you rate this movie? 1 = poor 5 = amazing</label> 
        <br/>
        <input
          id="rating"
          value={review.rating}
          type="text"
          onChange={handleTextChange}
          min={1}
          max={5}
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
          <button input type="submit"> Reviews
          {/* <Link to={`/movies/${id}/reviews`}>Reviews</Link> */}
          </button>
      </form>
    </div>
  );
}

export default ReviewForm;