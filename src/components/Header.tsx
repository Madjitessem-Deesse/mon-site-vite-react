import React, { useState } from 'react';
import { Scissors, Search, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['Accueil', 'Couturiers', 'Services', 'À propos'];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Scissors className="w-8 h-8 text-blue-600" />
          <span className="font-bold text-xl text-blue-700"><strong>CoutureRDV</strong></span>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(item => (
            <a key={item} href="#" className="text-blue-700 hover:text-blue-500">
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer text-blue-700 hover:text-blue-500" />
          <User className="w-5 h-5 cursor-pointer text-blue-700 hover:text-blue-500" />
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow p-4 flex flex-col gap-3">
            {navItems.map(item => (
              <a key={item} href="#" className="text-blue-700 hover:text-blue-500">
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
