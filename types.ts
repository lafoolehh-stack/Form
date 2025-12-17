export enum RegistryType {
  INDIVIDUAL = 'INDIVIDUAL',
  ORGANIZATION = 'ORGANIZATION'
}

export interface IndividualFormData {
  fullName: string;
  currentTitle: string;
  birthDate: string;
  birthPlace: string;
  bioSummary: string;
  education: string;
  careerHistory: string;
  email: string;
  phone: string;
  socialLinks: string;
  // Office Use
  idChecked: boolean;
  photoTaken: boolean;
  registrarName: string;
}

export interface OrganizationFormData {
  legalName: string;
  type: string;
  foundedYear: string;
  missionVision: string;
  services: string;
  leadership: string;
  headquarters: string;
  website: string;
  // Office Use
  regChecked: boolean;
  logoReceived: boolean;
  registrarName: string;
}