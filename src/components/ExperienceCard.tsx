import { motion } from 'framer-motion';
import { Code, FileCode, Cpu, Binary } from 'lucide-react';

interface ExperienceCardProps {
  icon: 'html' | 'javascript' | 'programming' | 'dsa';
  title: string;
  description: string;
  index: number;
}

const iconMap = {
  html: FileCode,
  javascript: Code,
  programming: Cpu,
  dsa: Binary,
};

const ExperienceCard = ({ icon, title, description, index }: ExperienceCardProps) => {
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      className="flex-[1_1_250px] max-w-sm flex flex-col items-center text-center bg-card p-6 rounded-2xl shadow-lg card-hover group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-20 h-20 mb-4 rounded-xl bg-secondary flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <IconComponent className="w-10 h-10 text-primary" />
      </div>
      <h3 className="font-bold my-3 text-xl text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground text-left leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ExperienceCard;
