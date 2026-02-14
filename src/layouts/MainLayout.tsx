import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserSquare2, 
  Component, 
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SidebarItem = ({ to, icon: Icon, label }: { to: string, icon: any, label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) => cn(
      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
      isActive 
        ? "bg-blue-600 text-white" 
        : "text-gray-400 hover:bg-gray-800 hover:text-white"
    )}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </NavLink>
);

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={cn(
        "bg-gray-900 text-white transition-all duration-300 flex flex-col",
        isSidebarOpen ? "w-64" : "w-20"
      )}>
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && <h1 className="text-xl font-bold tracking-tight">ADMIN PANEL</h1>}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-gray-800 rounded-md"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <SidebarItem to="/" icon={LayoutDashboard} label={isSidebarOpen ? "Dashboard" : ""} />
          <SidebarItem to="/users" icon={Users} label={isSidebarOpen ? "Users" : ""} />
          <SidebarItem to="/customers" icon={UserSquare2} label={isSidebarOpen ? "Customers" : ""} />
          <SidebarItem to="/template" icon={Component} label={isSidebarOpen ? "Components" : ""} />
        </nav>

        <div className="p-4 mt-auto border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-left text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-gray-800">
            {/* Page title could be dynamic based on route */}
            Overview
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              A
            </div>
            <span className="text-sm font-medium text-gray-700">Admin User</span>
          </div>
        </header>

        <div className="p-8 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
