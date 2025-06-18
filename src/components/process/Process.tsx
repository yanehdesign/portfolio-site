import ProcessCard from './process/ProcessCard';
import { processItems } from '../data/projectsData';

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            id="process-heading" 
            className="text-4xl md:text-5xl font-display font-bold text-burgundy mb-4"
          >
            Logo Design Process
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-crimson">
            Our logo design process is a path that ensures creativity, clarity, and consistency.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processItems.map((item, idx) => (
            <ProcessCard 
              key={item.id} 
              processItem={item} 
              index={idx} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}