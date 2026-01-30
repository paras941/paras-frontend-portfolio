import { motion } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact me' },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex items-center justify-center md:justify-around flex-wrap bg-nav/90 backdrop-blur-sm min-h-[55px] px-5 gap-4 sticky top-0 z-50 shadow-lg">
        <motion.div 
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          Personal-Portfolio
        </motion.div>
        <ul className="flex flex-wrap list-none justify-center gap-6">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={link.href} className="nav-link inline-block">
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
