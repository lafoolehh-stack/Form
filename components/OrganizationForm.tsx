import React, { useState } from 'react';
import { OrganizationFormData } from '../types';
import Input from './Input';
import TextArea from './TextArea';
import { Building2, Globe, Calendar, Users, Target, Save, ShieldCheck } from 'lucide-react';
import { generateMissionStatement } from '../services/geminiService';

const OrganizationForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [formData, setFormData] = useState<OrganizationFormData>({
    legalName: '',
    type: '',
    foundedYear: '',
    missionVision: '',
    services: '',
    leadership: '',
    headquarters: '',
    website: '',
    regChecked: false,
    logoReceived: false,
    registrarName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleAiMission = async () => {
    if (!formData.legalName || !formData.type) {
      alert("Please fill in Company Name and Type to generate a mission statement.");
      return;
    }
    setAiLoading(true);
    const mission = await generateMissionStatement(formData.legalName, formData.type);
    if (mission) {
      setFormData(prev => ({ ...prev, missionVision: mission }));
    }
    setAiLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API
    setTimeout(() => {
      alert("Organization Profile Saved Successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in-up">
      {/* Section 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
        <h3 className="text-lg font-semibold text-brand-dark border-l-4 border-brand-gold pl-3 mb-4">
          1. Aqoonsiga Shirkadda (Corporate Identity)
        </h3>
        <Input 
          label="Magaca Rasmiga ah (Legal Name)" 
          name="legalName"
          value={formData.legalName}
          onChange={handleChange}
          placeholder="Magaca shirkadda..."
          icon={<Building2 className="h-5 w-5" />}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="Nooca (Industry Type)" 
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="e.g. Bank, Telecom, NGO..."
            required
          />
          <Input 
            label="Sanadka Aasaaska" 
            name="foundedYear"
            value={formData.foundedYear}
            onChange={handleChange}
            placeholder="2010"
            icon={<Calendar className="h-5 w-5" />}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
        <h3 className="text-lg font-semibold text-brand-dark border-l-4 border-brand-gold pl-3 mb-4">
          2. Hadafka & Hiigsiga (Mission & Vision)
        </h3>
        <TextArea 
          label="Hiigsiga & Hadafka (Mission & Vision)" 
          name="missionVision"
          value={formData.missionVision}
          onChange={handleChange}
          placeholder="Qor halkan..."
          onAiGenerate={handleAiMission}
          isAiLoading={aiLoading}
        />
      </div>

      {/* Section 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
        <h3 className="text-lg font-semibold text-brand-dark border-l-4 border-brand-gold pl-3 mb-4">
          3. Adeegyada & Hogaanka
        </h3>
        <TextArea 
          label="Adeegyada Ugu Waaweyn (Key Services)" 
          name="services"
          value={formData.services}
          onChange={handleChange}
          placeholder="Liiska adeegyada ama badeecadaha..."
        />
        <Input 
          label="Hogaanka Sare (Leadership)" 
          name="leadership"
          value={formData.leadership}
          onChange={handleChange}
          placeholder="Magaca CEO-ga iyo Guddiga Sare..."
          icon={<Users className="h-5 w-5" />}
        />
      </div>

      {/* Section 4 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
        <h3 className="text-lg font-semibold text-brand-dark border-l-4 border-brand-gold pl-3 mb-4">
          4. Xiriirka Rasmiga ah
        </h3>
        <Input 
          label="Xarunta Dhexe (Headquarters)" 
          name="headquarters"
          value={formData.headquarters}
          onChange={handleChange}
          placeholder="Goobta ay ku taal..."
          icon={<Target className="h-5 w-5" />}
        />
        <Input 
          label="Website URL" 
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://..."
          icon={<Globe className="h-5 w-5" />}
        />
      </div>

      {/* Office Use */}
      <div className="bg-amber-50 p-6 rounded-xl border border-brand-gold/30 mb-8">
        <div className="flex items-center gap-2 mb-4 text-brand-dark">
          <ShieldCheck className="h-6 w-6 text-brand-gold" />
          <h4 className="text-lg font-bold">Xafiiska Kaliya (For Office Use Only)</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-amber-200 cursor-pointer hover:bg-amber-50 transition-colors">
            <input 
              type="checkbox" 
              name="regChecked"
              checked={formData.regChecked}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-brand-dark rounded focus:ring-brand-gold"
            />
            <span className="font-medium text-brand-dark">Diiwaangelinta Dowladda waa la hubiyay</span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-amber-200 cursor-pointer hover:bg-amber-50 transition-colors">
            <input 
              type="checkbox" 
              name="logoReceived"
              checked={formData.logoReceived}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-brand-dark rounded focus:ring-brand-gold"
            />
            <span className="font-medium text-brand-dark">Logo tayo leh (PNG) waa la helay</span>
          </label>
        </div>
        <Input 
          label="Magaca Shaqaalaha Diiwaangeliyay" 
          name="registrarName"
          value={formData.registrarName}
          onChange={handleChange}
          className="bg-white"
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-brand-dark text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg hover:bg-slate-800 focus:ring-4 focus:ring-brand-dark/30 transition-all flex items-center justify-center gap-2 active:transform active:scale-95"
      >
        {loading ? 'Saving...' : (
          <>
            <Save className="h-5 w-5" />
            Keydi Xogta (Save Company)
          </>
        )}
      </button>
    </form>
  );
};

export default OrganizationForm;