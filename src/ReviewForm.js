// ReviewForm.js
import React, { useState } from 'react';

const ReviewForm = ({ onAddReview }) => {
  const [newReview, setNewReview] = useState('');

  const handleInputChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(newReview);
    setNewReview('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label id="label">
        Leave a Review:
        <textarea id="text" value={newReview} onChange={handleInputChange} />
      </label>
      <button id="button" type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
