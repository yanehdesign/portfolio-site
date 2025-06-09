
export type Project = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  details: string;
  extraImages: string[];
  goal?: string;           // Project goal or client brief
  role?: string;           // Your role
  tools?: string[];        // Tools/technologies used
  challenges?: string;     // Key challenges and solutions
};

export type ProcessItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};
