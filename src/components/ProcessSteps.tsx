import React from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

const ProcessSteps: React.FC<ProcessStepsProps> = ({ steps }) => (
  <ol className="list-decimal pl-6 space-y-4">
    {steps.map(step => (
      <li key={step.id}>
        <h3 className="font-bold text-pink-800">{step.title}</h3>
        <p className="text-pink-900">{step.description}</p>
      </li>
    ))}
  </ol>
);

export default ProcessSteps;
