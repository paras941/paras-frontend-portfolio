import { motion } from 'framer-motion';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  index: number;
}

const ProjectCard = ({ image, title, description, liveUrl, githubUrl, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-card rounded-2xl shadow-lg flex-[1_1_320px] max-w-md overflow-hidden flex flex-col card-hover group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={`Screenshot of ${title} project`}
          className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
          {description}
        </p>
        <div className="flex gap-4 mt-auto justify-center">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg"
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
