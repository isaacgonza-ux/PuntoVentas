import React from 'react';
import { Form } from 'react-bootstrap';
import { BsBell, BsChevronDown } from 'react-icons/bs';
import '../style/DashboardHeader.css';

export const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      {/* Puedes poner un título o dejarlo vacío a la izquierda */}
      <div className="header-left">
        <h2>Dashboard</h2> 
      </div>

      <div className="header-right">
        {/* Switch de Open For Order */}
    

        {/* Campana de Notificaciones */}
        <div className="notification-wrapper">
          <BsBell className="bell-icon" />
          <span className="notification-dot"></span>
        </div>

        {/* Perfil de Usuario */}
        <div className="user-profile">
          {/* Reemplaza esta URL con la imagen que prefieras */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ukhP2RvNPDbV7I7YpyYlIJ4ZWvHQrJSy4g&s" alt="Avatar" className="avatar" />
          <span className="user-name">Isaac</span>
        </div>
      </div>
    </div>
  );
};