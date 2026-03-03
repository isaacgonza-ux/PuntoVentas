import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app-container">
      <Sidebar />
      
      {/* Contenido principal de tu aplicación */}
      <main className="main-content">
        <h1>Dashboard</h1>
        <p>Aquí irá el contenido de tu aplicación...</p>
      </main>
    </div>
  );
}

export default App
