// src/pages/Dashboard.tsx
import React from 'react';
import SidebarLayout from '../layouts/SidebarLayout';

const Dashboard: React.FC = () => {
  return (
    <SidebarLayout activeItem="dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Widgets ici */}
      </div>
      {/* Graphiques et autres sections */}
    </SidebarLayout>
  );
};

export default Dashboard;
