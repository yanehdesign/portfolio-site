import { Palette, Lightbulb, Layout, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Discovery",
      description: "Understanding your vision, goals, and target audience to create purposeful design solutions."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Crafting visual elements that align with your brand's personality and resonate with your audience."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Refine",
      description: "Iterating and perfecting every detail to ensure the final design exceeds expectations."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch",
      description: "Delivering polished designs ready to make an impact in the real world."
    }
  ];

  return (
    <section id="process" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-primary-light">
          My Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-800 hover:bg-zinc-700 transition"
            >
              <div className="text-primary mb-4">{step.icon}</div>
              <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
              <p className="text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}