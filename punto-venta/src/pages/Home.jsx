import React from 'react';
import { StatCard } from '../components/statCard';
import { statsData } from '../data/StatsData';

export const Home = () => {
  return (
    // Ya no necesitamos estilos en línea aquí, App.css controla el espacio
    <div>
      
      {/* Título de la sección */}
      <h3 style={{ marginBottom: '20px', color: '#333', fontWeight: '600' }}>
        Overview
      </h3>
      
      {/* Contenedor de las tarjetas */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' , justifyContent: 'center'}}>
        {statsData.map((stat) => (
          <StatCard 
            key={stat.id} 
            number={stat.number} 
            label={stat.label} 
          />
        ))}
      </div>

    </div>
  );
};