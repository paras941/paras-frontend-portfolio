import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    icon: 'html' as const,
    title: 'Backend Development',
    description:
      'Build backend systems and RESTful APIs with a focus on structured logic, data flow, and scalability. Emphasize clean code, maintainable architecture, and real-world application behavior.',
  },
  {
    icon: 'javascript' as const,
    title: 'Frontend Engineering (Tailwind CSS)',
    description:
      'Design and develop responsive, user-friendly interfaces using Tailwind CSS, with attention to layout, accessibility, and reusable components. Focus on clean UI and smooth user experience rather than over-engineering.',
  },
  {
    icon: 'programming' as const,
    title: 'Artificial Intelligence (AI)',
    description:
      'Familiar with core AI/ML concepts and practical usage of AI tools and APIs to integrate intelligent features into applications, prioritizing real-world use cases over theoretical hype.',
  },
  {
    icon: 'dsa' as const,
    title: 'Competitive Programming / LeetCode Practice',
    description:
      'Actively practice DSA and algorithmic problems on LeetCode, emphasizing optimized solutions, edge-case handling, and time–space complexity analysis to strengthen problem-solving skills.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto py-12 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground font-bold text-base mb-2">What I have done</p>
        <h2 className="text-foreground text-4xl font-bold">Work Experience</h2>
      </motion.div>

      <div className="flex justify-center items-stretch flex-wrap gap-8">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.title} {...exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
