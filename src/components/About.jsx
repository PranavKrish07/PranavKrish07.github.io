import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="container" style={{ position: 'relative', zIndex: 0 }}>
      {/* Subtle Ronin Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/ronin1.png)',
        backgroundSize: '800px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        opacity: 0.25,
        zIndex: -1,
        maskImage: 'radial-gradient(circle at 20% 50%, black 0%, transparent 50%)',
        WebkitMaskImage: 'radial-gradient(circle at 20% 50%, black 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ color: 'var(--accent-teal)' }}>01.</span> About Me
      </motion.h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Professional Summary</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Full-stack engineer focused on backend architecture and end-to-end product ownership. Builds REST APIs with Django REST Framework, ships React frontends, and models data in PostgreSQL, with production experience in JWT-based authentication and Gemini API integration.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Has independently designed, built, and deployed two complete full-stack products, handling everything from data modeling and API design to deployment and CORS configuration. Interested in workflow automation and AI-assisted tooling, and enjoys the engineering problem of turning a system design on paper into a working, deployed product.
          </p>
        </motion.div>

        <motion.div
          className="glass-panel"
          style={{ padding: '2rem' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent-teal)' }}>Education</h3>
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: 'var(--text-primary)', fontSize: '1.2rem' }}>B.Tech in Computer Science & Engineering</h4>
            <p style={{ color: 'var(--text-muted)' }}>Lovely Professional University, Punjab | 2022 – Present (Expected)</p>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              <strong>Coursework:</strong> Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Software Engineering
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem 0', color: 'var(--accent-teal)' }}>Certifications</h3>
          <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>▹ Full Stack Web Development — IBM (Coursera), 2025</li>
            <li>▹ Agile Project Management — University of Colorado (Coursera), 2026</li>
            <li>▹ Project Planning & Execution — University of Colorado (Coursera), 2026</li>
            <li>▹ Programming for Everybody (Python) — University of Michigan (Coursera), 2023</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
