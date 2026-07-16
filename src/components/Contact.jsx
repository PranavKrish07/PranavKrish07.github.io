import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="container" style={{ textAlign: 'center', paddingBottom: '8rem' }}>
      <motion.h2 
        className="section-title"
        style={{ justifyContent: 'center' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ color: 'var(--accent-teal)' }}>04.</span> What's Next?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <h3 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Get In Touch</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <a 
          href="mailto:pranavkrishna404@gmail.com"
          className="btn-primary"
          style={{ marginBottom: '4rem', gap: '0.8rem' }}
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="https://github.com/PranavKrish07" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-teal)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/pranavkrish07" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-teal)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FaLinkedin size={28} />
          </a>
          <a href="https://drive.google.com/file/d/1nyhzbiebi_c791Y2YXWtCRq3SnTr8BVI/view?usp=sharing" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-teal)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <FileText size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
