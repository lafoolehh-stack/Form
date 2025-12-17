import React from 'react';
import { Award } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8 pt-4">
      <div className="flex justify-center mb-4">
        <div className="h-16 w-16 bg-brand-dark rounded-full flex items-center justify-center border-4 border-brand-gold shadow-lg">
          <Award className="text-brand-gold h-8 w-8" />
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-brand-dark tracking-tight">
        SomaliPin Registry
      </h1>
      <p className="text-slate-500 mt-2 font-medium italic">
        The Archive of Excellence - Official Data Entry Form
      </p>
      <div className="w-24 h-1 bg-brand-gold mx-auto mt-6 rounded-full"></div>
    </header>
  );
};

export default Header;