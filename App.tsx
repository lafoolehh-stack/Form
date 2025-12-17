import React, { useState } from 'react';
import Header from './components/Header';
import IndividualForm from './components/IndividualForm';
import OrganizationForm from './components/OrganizationForm';
import { RegistryType } from './types';
import { User, Building2 } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RegistryType>(RegistryType.INDIVIDUAL);

  return (
    <div className="min-h-screen bg-brand-light pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <Header />

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          
          {/* Tab Navigation */}
          <div className="flex border-b border-slate-200 bg-slate-50">
            <button
              onClick={() => setActiveTab(RegistryType.INDIVIDUAL)}
              className={`flex-1 py-5 flex items-center justify-center gap-2 font-bold text-sm sm:text-lg transition-all ${
                activeTab === RegistryType.INDIVIDUAL
                  ? 'text-brand-dark bg-white border-b-4 border-brand-gold'
                  : 'text-slate-500 hover:text-brand-dark hover:bg-slate-100'
              }`}
            >
              <User className={`h-5 w-5 ${activeTab === RegistryType.INDIVIDUAL ? 'text-brand-gold' : 'text-slate-400'}`} />
              Shakhsi (Individual)
            </button>
            <button
              onClick={() => setActiveTab(RegistryType.ORGANIZATION)}
              className={`flex-1 py-5 flex items-center justify-center gap-2 font-bold text-sm sm:text-lg transition-all ${
                activeTab === RegistryType.ORGANIZATION
                  ? 'text-brand-dark bg-white border-b-4 border-brand-gold'
                  : 'text-slate-500 hover:text-brand-dark hover:bg-slate-100'
              }`}
            >
              <Building2 className={`h-5 w-5 ${activeTab === RegistryType.ORGANIZATION ? 'text-brand-gold' : 'text-slate-400'}`} />
              Shirkad (Organization)
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-10 bg-white min-h-[600px]">
            {activeTab === RegistryType.INDIVIDUAL ? (
              <IndividualForm />
            ) : (
              <OrganizationForm />
            )}
          </div>

        </div>

        <footer className="text-center mt-10 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} SomaliPin Registry. All Rights Reserved.</p>
          <p className="mt-1 text-xs">Archive of Excellence | Data Protection Guaranteed</p>
        </footer>

      </div>
    </div>
  );
};

export default App;