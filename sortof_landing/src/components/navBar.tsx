import React from 'react';

type BottomNavbarProps = {
  onHomeClick: () => void;
  onSearchClick: () => void;
  onAddClick: () => void;
  onProfileClick: () => void;
  centerText?: string;
  activeTab?: string | null;
};

const BottomNavbar: React.FC<BottomNavbarProps> = ({ 
  onHomeClick, 
  onSearchClick, 
  onAddClick, 
  onProfileClick,
  centerText = "SORTOF",
  activeTab = null 
}) => {
  const navItems = [
    {
      id: 'home',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      onClick: onHomeClick,
      label: 'Home'
    },
    {
      id: 'search',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      onClick: onSearchClick,
      label: 'Search'
    },
    {
      id: 'add',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      onClick: onAddClick,
      label: 'Add'
    },
    {
      id: 'profile',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      onClick: onProfileClick,
      label: 'Profile'
    }
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg bg-black shadow-2xl rounded-full px-4 sm:px-8 py-4 z-50 border border-gray-800">
      <div className="flex items-center justify-between">
        {/* First two nav items */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className={`flex flex-col items-center p-2 sm:p-3 rounded-full transition-all duration-200 hover:bg-gray-800 hover:scale-105 active:scale-95 ${
                activeTab === item.id 
                  ? 'text-white bg-gray-800' 
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>

        {/* Center Text */}
        <div className="flex-1 flex justify-center">
          <div className="px-4 sm:px-6 py-2 bg-white text-black rounded-full text-xs sm:text-sm font-bold tracking-wider">
            {centerText}
          </div>
        </div>

        {/* Last two nav items */}
        <div className="flex items-center space-x-4 sm:space-x-8">
          {navItems.slice(2).map((item) => (
            <button
              key={item.id}
              onClick={item.onClick}
              className={`flex flex-col items-center p-2 sm:p-3 rounded-full transition-all duration-200 hover:bg-gray-800 hover:scale-105 active:scale-95 ${
                activeTab === item.id 
                  ? 'text-white bg-gray-800' 
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;