import React from 'react'; 
import { BsHandbagFill } from 'react-icons/bs'; // Icono de la bolsita
import '../style/StatCard.css';

export const StatCard = ({ number, label }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon-wrapper">
        <BsHandbagFill className="stat-icon" />
      </div>
      <div className="stat-info">
        <h3>{number}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};