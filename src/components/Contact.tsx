import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="max-w-[700px] w-[90vw] mx-auto py-12 flex flex-col items-center">
      <motion.div
        className="text-center mb-12 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground font-bold text-lg mb-3">Get In Touch</p>
        <h2 className="text-foreground text-5xl font-bold">Contact Me</h2>
      </motion.div>

      <motion.form
        className="flex flex-col gap-6 w-full max-w-[600px] items-center"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="text-base font-medium text-muted-foreground mb-2 text-center">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-border bg-card text-foreground text-lg input-focus"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-base font-medium text-muted-foreground mb-2 text-center">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-border bg-card text-foreground text-lg input-focus"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="message" className="text-base font-medium text-muted-foreground mb-2 text-center">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-md border border-border bg-card text-foreground text-lg input-focus resize-none"
          />
        </div>

        <motion.button
          type="submit"
          className="p-5 text-xl font-bold text-primary-foreground bg-primary border-none rounded-md cursor-pointer transition-all duration-300 hover:scale-105 hover:opacity-90 glow-purple w-full max-w-[400px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
