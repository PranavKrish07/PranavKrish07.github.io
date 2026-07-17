import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Experience() {
  const projects = [
    {
      title: 'Crescendo — Gamified Productivity Engine',
      tech: 'Django 5.2, Django REST Framework, React.js (Vite), Gemini API, SQLite',
      points: [
        'Architected a decoupled Django REST Framework + React.js system with JWT authentication, custom user models, and email verification, keeping client and server independently deployable.',
        'Designed a rank-based streak and penalty engine entirely in backend business logic, so progression and point deductions stay consistent regardless of client behavior.',
        'Built RPG-inspired progression mechanics (ranks, streaks, penalties) to explore behavior-driven productivity as a product design problem, not just a feature list.',
        'Implemented a per-user theming system persisted across sessions, structured to apply consistently across the full component tree.',
        'Integrated the Gemini API to auto-generate step-by-step subtask checklists from a single quest title, reducing manual task breakdown.'
      ],
      demo: 'https://crescendo-pf8l.vercel.app/',
      github: 'https://github.com/PranavKrish07/Crescendo'
    },
    {
      title: 'Magic Todo — AI-Assisted Task Manager',
      tech: 'Django REST Framework, React.js, Tailwind CSS, Axios, Gemini API, PostgreSQL',
      points: [
        'Built a full-stack task manager on a DRF backend and React.js (Vite) frontend, with JWT-based authentication securing all API routes.',
        'Integrated the Gemini LLM API with an exponential backoff retry mechanism, so the backend degrades gracefully under API rate limits instead of failing outright.',
        'Structured full CRUD task management through DRF serializers and class-based views, and configured CORS between a Vercel frontend and Render backend for resilient cross-origin requests.',
        'Implemented real-time task prioritization and categorization using React state, avoiding full-page reloads and keeping the UI responsive.'
      ],
      demo: 'https://magic-todo-mrvz.vercel.app/',
      github: 'https://github.com/PranavKrish07/Magic-Todo'
    }
  ];

  return (
    <section id="experience" className="container" style={{ position: 'relative', zIndex: 0 }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(/ronin2.png)',
        backgroundSize: '800px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
        opacity: 0.15,
        zIndex: -1,
        maskImage: 'radial-gradient(circle at 80% 50%, black 0%, transparent 50%)',
        WebkitMaskImage: 'radial-gradient(circle at 80% 50%, black 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ color: 'var(--accent-teal)' }}>02.</span> Project Experience
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            className="glass-panel"
            style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div 
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: 'var(--accent-teal-glow)',
                filter: 'blur(80px)',
                borderRadius: '50%',
                zIndex: -1
              }}
            />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--accent-teal)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  {project.tech}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                  <FaGithub size={24} />
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                  <FaExternalLinkAlt size={22} />
                </a>
              </div>
            </div>

            <ul style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {project.points.map((point, i) => (
                <li key={i} style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ color: 'var(--accent-teal)' }}>▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
