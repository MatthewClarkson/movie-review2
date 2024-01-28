// Stars.js
import React, { useState } from 'react';

const Stars = ({ rating }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarClick = (starCount) => {
    setSelectedStars(starCount);
    // You can add logic here to send the rating to the server or parent component
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((starCount) => (
        <span
          key={starCount}
          onClick={() => handleStarClick(starCount)}
          style={{ color: starCount <= selectedStars ? 'gold' : 'gray', cursor: 'pointer' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
