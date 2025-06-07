export type ProcessItem = {
  id: number;
  projectId: number;
  title: string;
  description: string;
};

// Footer.tsx
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} Janet Garcia. All rights reserved.</p>
    </footer>
  );
};


