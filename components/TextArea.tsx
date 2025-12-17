import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  onAiGenerate?: () => void;
  isAiLoading?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({ label, onAiGenerate, isAiLoading, className, ...props }) => {
  return (
    <div className={`mb-4 ${className || ''}`}>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-bold text-brand-dark">
          {label}
        </label>
        {onAiGenerate && (
          <button
            type="button"
            onClick={onAiGenerate}
            disabled={isAiLoading}
            className="text-xs flex items-center gap-1 text-brand-gold hover:text-yellow-600 font-semibold transition-colors disabled:opacity-50"
          >
            {isAiLoading ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <Sparkles className="h-3 w-3" />
            )}
            AI Magic Fill
          </button>
        )}
      </div>
      <textarea
        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all shadow-sm min-h-[100px]"
        {...props}
      />
    </div>
  );
};

export default TextArea;