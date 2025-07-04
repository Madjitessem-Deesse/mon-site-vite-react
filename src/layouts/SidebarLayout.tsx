import type { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

interface SidebarLayoutProps {
  children: ReactNode;
  activeItem?: string;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children, activeItem }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeItem={activeItem ?? ''} />
      <main className="flex-grow p-6 overflow-auto">{children}</main>
    </div>
  );
};

export default SidebarLayout;
