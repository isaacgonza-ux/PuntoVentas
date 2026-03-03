import React, { useState } from 'react';
import '../style/Sidebar.css';
import { 
  Home, 
  FileText, 
  ShoppingCart, 
  List, 
  Users, 
  LineChart, 
  User, 
  Store, 
  LogOut 
} from 'lucide-react';

// Actualizamos NavItem para que reciba una función onClick
const NavItem = ({ icon: Icon, label, active, onClick }) => {
  return (
    <a 
      href="#" 
      className={`nav-item ${active ? 'active' : ''}`}
      onClick={(e) => {
        e.preventDefault(); // Evita que la página recargue al hacer clic en el enlace
        onClick();
      }}
    >
      <Icon size={18} className="icon" />
      <span>{label}</span>
    </a>
  );
};

export default function Sidebar() {
  // useState en null hace que ningún botón empiece seleccionado
  const [itemActivo, setItemActivo] = useState(null);

  // Lista de items principales para hacer el código más limpio
  const menuItems = [
    { icon: Home, label: 'Dashboard' },
    { icon: FileText, label: 'Ordenes' },
    { icon: ShoppingCart, label: 'Productos' },
    { icon: List, label: 'Categorías' },
    { icon: Users, label: 'Usuarios' },
    { icon: LineChart, label: 'Reportes' }
  ];

  return (
    <aside className="sidebar">
      {/* Cabecera */}
      <div className="sidebar-header">
        Company name
      </div>

      {/* Navegación Principal */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavItem 
            key={item.label}
            icon={item.icon} 
            label={item.label} 
            active={itemActivo === item.label} 
            onClick={() => setItemActivo(item.label)} 
          />
        ))}
      </nav>

      <hr className="sidebar-divider" />

      {/* Sección de Perfil */}
      <div className="sidebar-profile">
        <NavItem 
          icon={User} 
          label="Perfil" 
          active={itemActivo === 'Perfil'} 
          onClick={() => setItemActivo('Perfil')}
        />
      </div>

      <hr className="sidebar-divider" />

      {/* Botones de Acción */}
      <div className="sidebar-footer">
        <button className="action-btn btn-store">
          <Store size={18} />
          Tienda
        </button>
        
        <button className="action-btn btn-logout">
          <LogOut size={18} />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}