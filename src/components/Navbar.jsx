import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];
  
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        zIndex: 1000,
        background: 'rgba(5, 10, 13, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(20, 184, 166, 0.1)',
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '2px' }}>
        <Link to="/" style={{ color: 'inherit' }}>
          P<span style={{ color: 'var(--accent-teal)' }}>K</span>
        </Link>
      </div>
      <ul style={{ display: 'flex', gap: '2rem' }}>
        {links.map((link, idx) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={idx}>
              <Link 
                to={link.path}
                style={{
                  color: isActive ? 'var(--accent-teal)' : 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: isActive ? 700 : 600,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.target.style.color = 'var(--accent-teal)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.target.style.color = 'var(--text-secondary)';
                }}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
