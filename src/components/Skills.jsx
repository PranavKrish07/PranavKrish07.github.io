import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'C++']
    },
    {
      title: 'Backend',
      skills: ['Django', 'Django REST Framework', 'FastAPI', 'Flask', 'JWT Auth', 'REST APIs']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'HTML', 'CSS']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'SQLite']
    },
    {
      title: 'AI / Integrations',
      skills: ['Gemini API', 'Prompt Engineering', 'API Rate-limits']
    },
    {
      title: 'Tools & Deployment',
      skills: ['Git', 'GitHub', 'Postman', 'Vercel', 'Render', 'Linux', 'CORS']
    }
  ];

  return (
    <section id="skills" className="container" style={{ position: 'relative', zIndex: 0 }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/ronin3.png)',
        backgroundSize: '800px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: 0.3,
        zIndex: -1,
        maskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 50%)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ color: 'var(--accent-teal)' }}>03.</span> Technical Skills
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="glass-panel"
            style={{ padding: '2rem' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5, borderColor: 'rgba(0, 229, 255, 0.3)' }}
          >
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  style={{ 
                    padding: '0.4rem 1rem', 
                    background: 'rgba(0, 229, 255, 0.05)', 
                    color: 'var(--accent-teal)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    border: '1px solid rgba(0, 229, 255, 0.1)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
