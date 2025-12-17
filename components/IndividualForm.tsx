import React, { useState } from 'react';
import { IndividualFormData } from '../types';
import Input from './Input';
import TextArea from './TextArea';
import { User, Briefcase, Calendar, MapPin, Mail, Phone, Link as LinkIcon, Save, ShieldCheck } from 'lucide-react';
import { generateBio } from '../services/geminiService';

const IndividualForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [formData, setFormData] = useState<IndividualFormData>({
    fullName: '',
    currentTitle: '',
    birthDate: '',
    birthPlace: '',
    bioSummary: '',
    education: '',
    careerHistory: '',
    email: '',
    phone: '',
    socialLinks: '',
    idChecked: false,
    photoTaken: false,
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

  const handleAiBio = async () => {
    if (!formData.fullName || !formData.currentTitle) {
      alert("Please fill in Name and Title first to generate a bio.");
      return;
    }
    setAiLoading(true);
    const bio = await generateBio(formData.fullName, formData.currentTitle);
    if (bio) {
      setFormData(prev => ({ ...prev, bioSummary: bio }));
    }
    setAiLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert("Individual Profile Saved Successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in-up">
      {/* Section 1 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
        <h3 className="text-lg font-semibold text-brand-dark border-l-4 border-brand-gold pl-3 mb-4">
          1. Xogta Aasaasiga ah (Basic Info)
        </h3>
        <Input 
          label="Magaca oo Saddexan (Full Name)" 
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Gali magaca oo buuxa..."
          icon={<User className="h-5 w-5" />}
          required
        />
        <Input 
          label="Jagada Hadda (Current Title)" 
          name="currentTitle"
          value={formData.currentTitle}
          onChange={handleChange}
          placeholder="Tusaale: CEO, Wasiir..."
          icon={<Briefcase className="h-5 w-5" />}
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="Taariikhda Dhalashada" 
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            icon={<Calendar className="h-5 w-5" />}
          />
          <Input 
            label="Goobta Dhalashada" 
            name="birthPlace"
            value={formData.birthPlace}
            onChange={handleChange}
            placeholder="Magaalada/Wadanka"
            icon={<MapPin className="h-5 w-5" />}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
        <h3 className="text-lg font-semibold text-brand-dark border-l-4 border-brand-gold pl-3 mb-4">
          2. Taariikh Nololeed (Bio & Education)
        </h3>
        <TextArea 
          label="Soo Koobid (Summary)" 
          name="bioSummary"
          value={formData.bioSummary}
          onChange={handleChange}
          placeholder="Qeexid kooban oo ku saabsan qofka..."
          onAiGenerate={handleAiBio}
          isAiLoading={aiLoading}
        />
        <TextArea 
          label="Heerka Waxbarasho (Education)" 
          name="education"
          value={formData.education}
          onChange={handleChange}
          placeholder="Jaamacadaha, Sanadaha, iyo Takhasuska..."
        />
      </div>

      {/* Section 3 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
        <h3 className="text-lg font-semibold text-brand-dark border-l-4 border-brand-gold pl-3 mb-4">
          3. Khibradda Shaqo (Career)
        </h3>
        <TextArea 
          label="Shaqooyinkii Hore & Guulaha (Track Record)" 
          name="careerHistory"
          value={formData.careerHistory}
          onChange={handleChange}
          className="h-32"
          placeholder="Liiska shaqooyinka iyo guulaha la taaban karo..."
        />
      </div>

      {/* Section 4 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
        <h3 className="text-lg font-semibold text-brand-dark border-l-4 border-brand-gold pl-3 mb-4">
          4. Xiriirka (Contact Info - Private)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input 
            label="Email Address" 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            icon={<Mail className="h-5 w-5" />}
          />
          <Input 
            label="Phone Number" 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+252..."
            icon={<Phone className="h-5 w-5" />}
          />
        </div>
        <Input 
          label="Social Media Links" 
          name="socialLinks"
          value={formData.socialLinks}
          onChange={handleChange}
          placeholder="LinkedIn, Twitter, Website..."
          icon={<LinkIcon className="h-5 w-5" />}
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
              name="idChecked"
              checked={formData.idChecked}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-brand-dark rounded focus:ring-brand-gold"
            />
            <span className="font-medium text-brand-dark">Aqoonsiga waa la hubiyay (ID Checked)</span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-amber-200 cursor-pointer hover:bg-amber-50 transition-colors">
            <input 
              type="checkbox" 
              name="photoTaken"
              checked={formData.photoTaken}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-brand-dark rounded focus:ring-brand-gold"
            />
            <span className="font-medium text-brand-dark">Sawir tayo leh waa la qaaday</span>
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
            Keydi Xogta (Save Profile)
          </>
        )}
      </button>
    </form>
  );
};

export default IndividualForm;