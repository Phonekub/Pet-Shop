import React from 'react';
import './Detail.css';

const PetDetail = ({ pet }) => {
  return (
    <div className="pet-card">
      <img 
        src={pet.img} 
        alt={pet.name} 
        className="pet-card-image" 
      />
      <div className="pet-card-title">{pet.name}</div>
      <div className="pet-card-stars">★★★★★</div>
      <div className="pet-card-details">
        <div>
          <p>Age: {pet.age} years</p>
          <p>Gender: {pet.gender}</p>
          <p>Weight: {pet.weight} kg</p>
        </div>
        <div>
          <p>Pet price: {pet.price} Baht</p>
          <button className="pet-card-button">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
