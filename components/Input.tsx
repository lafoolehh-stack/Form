import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, icon, className, ...props }) => {
  return (
    <div className={`mb-4 ${className || ''}`}>
      <label className="block text-sm font-bold text-brand-dark mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          className="w-full px-4 py-3 pl-4 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all shadow-sm"
          {...props}
        />
        {icon && (
          <div className="absolute right-3 top-3 text-slate-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;