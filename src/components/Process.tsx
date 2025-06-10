import ProcessCard from './ProcessCard';
import { processItems } from '../data/projectsData';

export default function Process() {

  return (
    <section id="process" aria-labelledby="process-heading" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 id="process-heading" className="text-3xl sm:text-4xl md:text-5xl leading-tight text-white font-bold mb-8">
          Logo Design Process
        </h2>
        <p className="max-w-2xl text-lg text-zinc-400 mb-8">
          Our logo design process is a path that ensures creativity, clarity, and consistency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processItems.map((item, idx) => (
            <ProcessCard key={item.id} processItem={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}