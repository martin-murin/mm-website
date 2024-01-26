// InterestsCard.js
import React from 'react';

const InterestsCard = ({ title, description, imageSrc }) => (
  <div className="col-md-4 mb-4">
    <div className="card border-0">
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

export default InterestsCard;