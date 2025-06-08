export interface Project {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  details: string;
  extraImages: string[]; // <-- THIS MUST BE string[]
}

export interface ProcessItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}