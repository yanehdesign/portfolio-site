import ProcessCard from './ProcessCard';
import { processItems } from '../data/projectsData';

export default function Process() {

  return (
    <section id="process" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-primary-light">
          Logo Design Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processItems.map((item, idx) => (
            <ProcessCard key={item.id} processItem={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}