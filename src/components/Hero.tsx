import React from 'react';
import femme from '../assets/femme.png'; // ajuste le chemin si nécessaire

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-200 from-rose-100 to-pink-200 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Texte */}
        <div>
          <span className="inline-block bg-blue-300 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Bienvenue dans CoutureRDV
          </span>
          <h1 className="text-4xl font-extrabold mb-4">
            Connectez-vous avec les <span className="text-blue-600">meilleurs couturiers du Tchad</span>
          </h1>
          <p className="text-gray-700 mb-6">
            Réservez vos rendez-vous, suivez vos commandes et découvrez les talents de la couture traditionnelle et moderne tchadienne.En cas de souci, votre dédommagement est garanti — votre satisfaction est notre priorité.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-rose-700 transition">
              Prendre rendez-vous
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-rose-100 transition">
              En savoir plus
            </button>
          </div>
        </div>

        {/* Illustration locale */}
        <div>
          <img
            src={femme}
            alt="femme couturière africaine souriante"
            className="rounded-lg shadow-lg w-87 object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
