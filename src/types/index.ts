export interface Award {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
}