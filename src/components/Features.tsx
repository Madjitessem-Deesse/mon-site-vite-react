import React from 'react';
import {Shield,CalendarDays,Users,Settings,Mail,Star,MapPin,CheckCircle,ShoppingBag,Medal,} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Suivez vos commandes en temps réel.',
    iconColor: 'text-blue-600',
  },
  {
    icon: CalendarDays,
    title: 'Temps',
    description: 'Réservation et traitement ultra rapides.',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Users,
    title: 'Couturiers vérifiés',
    description: 'Trouvez le couturier parfait.',
    iconColor: 'text-green-600',
  },
  {
    icon: Settings,
    title: 'Personnalisation',
    description: 'Adaptation complète selon vos besoins.',
    iconColor: 'text-pink-600',
  },
  {
    icon: Mail,
    title: 'Communication directe',
    description: 'Échangez directement avec votre couturier via notre messagerie intégrée.',
    iconColor: 'text-red-600',
  },
  {
    icon: Star,
    title: 'Système d’évaluation',
    description: 'Notez et commentez vos expériences pour aider la communauté.',
    iconColor: 'text-violet-600',
  },
];

const stats = [
  {
    icon: CheckCircle,
    value: '500+',
    label: 'Couturiers vérifiés',
    growth: '+15% ce mois',
  },
  {
    icon: ShoppingBag,
    value: '12,500+',
    label: 'Commandes réalisées',
    growth: '+23% ce mois',
  },
  {
    icon: Medal,
    value: '4.8/5',
    label: 'Note moyenne',
    growth: '+0.2 ce mois',
  },
  {
    icon: MapPin,
    value: '15+',
    label: 'Villes couvertes',
    growth: '+3 ce mois',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6 py-24">
        {/* Titre avec description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-blue-600 dark:text-white mb-4">
            Pourquoi choisir Couture RDV ?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Une plateforme complète qui révolutionne l'expérience de la couture au Tchad, en connectant clients et artisans avec simplicité et efficacité.
          </p>
        </div>

        {/* Blocs de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {features.map(({ icon: Icon, title, description,iconColor }) => {
            const isSecurity = title === 'Sécurité';
            return (
              <div
                key={title}
                className={`${
                  isSecurity ? 'p-12 scale-[1.05]' : 'p-10'
                } rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer text-center`}
              >
                <Icon className={`w-14 h-14 mx-auto mb-6 ${iconColor}`} />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>

        {/* Bloc avec les icônes*/}
     <div className="bg-blue-600 rounded-3xl p-12 text-center text-white">
      <h3 className="text-3xl font-bold mb-4">Des chiffres qui parlent</h3>
      <p className="mb-12">
       La confiance de milliers d'utilisateurs à travers le Tchad
      </p>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
         {stats.map(({ icon: Icon, value, label, growth }) => (
         <div key={label} className="text-center">
         <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
         <Icon className="w-6 h-6 text-blue-600" />
         </div>
         <div className="text-3xl font-bold text-white">{value}</div>
         <div className="mt-2 text-white">{label}</div>
         <div className="text-sm mt-1 text-white">{growth}</div>
         </div>
         ))}
         </div>
       </div>


        {/* Appel à l'action en dehors du bloc */}
        <div className="text-center mt-20">
          <h4 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Prêt à commencer votre expérience couture ?
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui font confiance à Couture RDV pour leurs besoins en couture traditionnelle et moderne.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Créer un compte
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition dark:bg-gray-900 dark:hover:bg-gray-800">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
