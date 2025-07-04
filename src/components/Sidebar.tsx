import React from 'react';
import {
  Home,
  Calendar,
  Users,
  Package,
  BarChart3,
  Settings,
} from 'lucide-react';
import profil from '../assets/deesse.png'; 

interface SidebarProps {
  activeItem: string;
  onNavigate?: (item: string) => void;
}

const navItems = [
  { id: 'dashboard', label: 'Tableau de bord', icon: Home },
  { id: 'rendezvous', label: 'Rendez-vous', icon: Calendar },
  { id: 'clients', label: 'Clients', icon: Users },
  { id: 'produits', label: 'Produits', icon: Package },
  { id: 'statistiques', label: 'Statistiques', icon: BarChart3 },
  { id: 'parametres', label: 'Paramètres', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ activeItem, onNavigate }) => {
  return (
    <aside className="w-64 bg-white shadow h-screen flex flex-col p-4">
      {/* Utilisateur avec photo */}
      <div className="mb-6 text-center">
        <img
          src={profil}
          alt="Photo de profil"
          className="w-16 h-16 rounded-full mx-auto mb-2 object-cover border-2 border-blue-500"
        />
        <p className="font-semibold text-blue-700">Madjitessem Déesse</p>
        <p className="text-sm text-green-600">● En ligne</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 flex-1">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate?.(id)}
            className={`flex items-center gap-3 p-2 rounded ${
              activeItem === id
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-600 hover:bg-rose-50'
            }`}
          >
            <Icon className="w-5 h-5" />
            {label}
          </button>
        ))}
      </nav>

      {/* Widget info */}
      <div className="mt-auto p-4 bg-blue-100 rounded">
        <p className="text-sm mb-2">
          Passez à la version premium pour plus de fonctionnalités !
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Passer Premium
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
