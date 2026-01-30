import { motion } from 'framer-motion';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#contact', label: 'Contact' },
  { href: '#experience', label: 'Experience' },
];

const Footer = () => {
  return (
    <motion.footer
      className="bg-background py-8 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex py-5 justify-center md:justify-evenly items-center flex-wrap gap-5 max-w-6xl mx-auto px-4">
        <div className="footer-title">
          <p className="text-xl font-bold gradient-text">Paras's Developer Portfolio</p>
        </div>
        <ul className="flex gap-6 list-none">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-foreground no-underline transition-all duration-300 hover:text-primary hover:scale-110 inline-block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center text-muted-foreground text-sm pt-3">
        © parasportfolio.com | All rights reserved
      </p>
    </motion.footer>
  );
};

export default Footer;
