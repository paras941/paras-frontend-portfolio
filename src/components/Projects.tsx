import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import leetcodeImage from '@/assets/project-leetcode.png';
import stopwatchImage from '@/assets/project-stopwatch.png';
import Shopperxweb from '@/assets/Shopperx-web.jpg';
import recipexweb from '@/assets/recipex.webp';

const projects = [
  {
    image: leetcodeImage,
    title: 'LeetMetric',
    description:
      'A web-based tool to display LeetCode user statistics and visualize progress. Built with HTML, CSS, and JavaScript (Fetch API).',
    liveUrl: 'https://paras941.github.io/LeetMetric/',
    githubUrl: 'https://github.com/paras941',
  },
  {
    image: stopwatchImage,
    title: 'JavaScript Stopwatch',
    description:
      'A sleek and responsive stopwatch application with lap functionality, created using vanilla JavaScript, HTML, and CSS.',
    liveUrl: 'https://paras941.github.io/vanilla-js-stopwatch/',
    githubUrl: 'https://github.com/paras941',
  },

  {
    image: Shopperxweb,
    title: 'shopperx-web',
    description:
      'A full-stack e-commerce web application featuring a responsive frontend built with Tailwind CSS, backend APIs for product and user management, and a clean architecture focused on performance, scalability, and real-world shopping workflows.',
    liveUrl: 'https://shopperx-web-dsbu.vercel.app',
    githubUrl: 'https://github.com/paras941/shopperx-web',
  },
  
  {
    image: recipexweb,
    title: 'recipex-web',
    description:
      'A sleek and responsive stopwatch application with lap functionality, created using vanilla JavaScript, HTML, and CSS.',
    liveUrl: 'https://react-recipe-site-zeta.vercel.app',
    githubUrl: 'https://github.com/paras941/recipex-web',
  },


];
  

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-12 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground font-bold text-base mb-2">My Work</p>
        <h2 className="text-foreground text-4xl font-bold">Recent Projects</h2>
      </motion.div>

      <div className="flex justify-center flex-wrap gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
