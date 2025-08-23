import React from 'react';
import './card.css';

const Card = ({ item, onDelete }) => {
  // Fallback image in case the stored image URL is invalid or missing
  const fallbackImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  
  // Checking if the image exists and is valid
  const imageUrl = item.image || fallbackImage;

  return (
    <div className="card">
        <div className="full">
          <img 
            src={imageUrl} 
            alt="profile" 
            className="card-image" 
            onError={(e) => e.target.src = fallbackImage} // Use fallback if the image is broken
          />
          <p>
            Name: <strong>{item.name.trim()}</strong>
          </p>
          <p>
            Course: <strong>{item.course || 'Course not available'}</strong>
          </p>
          <p>
            Total: <strong>{item.total}</strong>
          </p>
          {/* Delete button */}
          <button 
            className="delete-btn" 
            onClick={() => onDelete(item.num)} // Pass the unique ID to the parent function
          >
            Delete
          </button>
        </div>
      </div>
    
  );
};

export default Card;
