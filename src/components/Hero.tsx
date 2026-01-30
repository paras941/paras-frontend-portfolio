import { motion } from 'framer-motion';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import heroImage from '@/assets/hero-illustration.png';

const Hero = () => {
  const typedText = useTypingEffect({
    strings: ['Frontend Developer', 'Web Designer', 'Tech Explorer'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
  });

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-center items-center py-20 px-[10%] gap-12 min-h-[90vh]"
    >
      <motion.div
        className="flex-1 text-center md:text-left max-w-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Hey there! I'm{' '}
          <span className="gradient-text">Paras Rawat</span>
        </h1>
        <p className="text-base font-light leading-relaxed mb-6 text-muted-foreground">
          I’m a Full Stack Developer focused on building scalable, maintainable web applications with a strong foundation in data structures and algorithms. I work across the stack—from crafting responsive, accessible UIs using Tailwind CSS to designing and implementing efficient backend logic.

          I actively practice DSA and competitive programming on LeetCode, where I focus on writing optimized solutions with clear time and space complexity analysis. This has strengthened my problem-solving mindset and my ability to think in terms of performance, edge cases, and real-world constraints.

          My development approach is practical and results-driven: write clean code, understand the trade-offs, and avoid unnecessary abstraction. I care about code quality, consistency, and scalability, not just “making it work.”
        </p>
        <motion.span
          className="text-primary text-2xl md:text-3xl block h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.span>
      </motion.div>

      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={heroImage}
          alt="Web development illustration"
          className="max-w-full w-[350px] md:w-[450px] h-auto animate-float drop-shadow-2xl rounded-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
