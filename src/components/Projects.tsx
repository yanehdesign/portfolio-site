import { Mail, Phone, MapPin } from 'lucide-react';
import { projects } from '../data/projectsData';
import ProjectCard from './ProjectCard';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
            Let's Create Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:hello@yaneh.design"
              className="flex flex-col items-center p-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition"
            >
              <Mail className="w-8 h-8 text-primary mb-4" />
              <span className="text-zinc-300">hello@yaneh.design</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex flex-col items-center p-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition"
            >
              <Phone className="w-8 h-8 text-primary mb-4" />
              <span className="text-zinc-300">+1 (234) 567-890</span>
            </a>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <span className="text-zinc-300">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

<section id="projects" className="py-16">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} onClick={function (): void {
        throw new Error('Function not implemented.');
      } } />
    ))}
  </div>
</section>;