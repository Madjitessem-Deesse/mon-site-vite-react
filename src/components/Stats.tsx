const Stats = () => {
  return (
    <section className="py-16 bg-rose-100">
      <div className="max-w-4xl mx-auto text-center grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-3xl font-bold text-rose-700">1.2k</p>
          <p className="text-sm text-gray-600">Utilisateurs</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-rose-700">320+</p>
          <p className="text-sm text-gray-600">Projets lancés</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-rose-700">98%</p>
          <p className="text-sm text-gray-600">Satisfaction</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-rose-700">1.5s</p>
          <p className="text-sm text-gray-600">Temps moyen</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
