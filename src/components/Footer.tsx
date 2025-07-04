import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';
import { Scissors,} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">
           {/* Logo avec texte en dessous */}
     < div className="flex flex-col items-start">
     <div className="flex items-center gap-2">
       <Scissors className="w-8 h-8 text-blue-600" />
       <span className="font-bold text-xl text-blue-700">CoutureRDV</span>
     </div>
      <p className="text-white-600">
      Vous connecte avec les meilleurs couturiers du Tchad.
      </p>
     </div>


        {/* À propos */}
        <div>
          <h4 className="font-bold mb-4">À propos</h4>
          <p>Plateforme moderne pour la gestion de vos rendez-vous couture.</p>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="font-bold mb-4">Liens rapides</h4>
          <ul className="space-y-2">
            <li><a href="#accueil" className="hover:text-rose-600">Accueil</a></li>
            <li><a href="#fonctionnalites" className="hover:text-rose-600">Fonctionnalités</a></li>
            <li><a href="#tarifs" className="hover:text-rose-600">Tarifs</a></li>
            <li><a href="#contact" className="hover:text-rose-600">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>Développement</li>
            <li>Design UI/UX</li>
            <li>Consulting</li>
            <li>Formation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@example.com</p>
          <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +235 66 00 18 00</p>
          <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> N'Djamena, Tchad</p>
          <div className="flex gap-4 mt-4">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-rose-600" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-rose-600" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-rose-600" />
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-10">
        © 2025 Tous droits réservés. | Mentions légales | Politique de confidentialité
      </div>
    </footer>
  );
};

export default Footer;
