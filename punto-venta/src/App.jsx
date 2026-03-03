import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar';
import { DashboardHeader } from './components/DashboardHeader';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {


  return (
   <Router>
      {/* Contenedor principal que envuelve todo el layout */}
      <div className="app-layout">
        
        {/* 1. Sidebar a la izquierda (Fijo) */}
        <Sidebar />

        {/* 2. Contenedor derecho (Cabecera + Contenido dinámico) */}
        <div className="main-content">
          
          {/* Cabecera superior (Fija arriba del contenido) */}
          <DashboardHeader />

          {/* Área donde cambian las páginas según la URL */}
          <div className="page-content">
            <Routes>
           
              <Route path="/" element={<Home />} />
              
             
            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App
