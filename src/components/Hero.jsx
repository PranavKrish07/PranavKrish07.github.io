import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter';
import Marquee from './Marquee';

export default function Hero() {
  const typelines = [
    "building decoupled DRF + React apps", 
    "shipping JWT-secured production systems", 
    "wiring Gemini AI into real products", 
    "designing gamified UX with real backend logic"
  ];

  return (
    <>
      <header className="hero container">
        <div className="hero__grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero__kicker">Full-Stack Developer · Django + React</div>
            <h1 className="hero__name">Pranav Krishna<br/>Kandi</h1>
            
            <Typewriter strings={typelines} />
            
            <p className="hero__desc">
              I build full-stack web applications — REST APIs in Django, interactive frontends in React, and the unglamorous backend logic that makes a product actually work. Currently finishing my B.Tech in CSE at Lovely Professional University.
            </p>
            
            <div className="hero__actions">
              <Link to="/experience" className="btn-primary">
                View Projects
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
            
            <div className="hero__stats">
              <div>
                <div className="hero__stat-num">2</div>
                <div className="hero__stat-label">Production apps</div>
              </div>
              <div>
                <div className="hero__stat-num">4</div>
                <div className="hero__stat-label">Certifications</div>
              </div>
              <div>
                <div className="hero__stat-num">2026</div>
                <div className="hero__stat-label">Graduating</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero__photo-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="hero__ring"></div>
            <div className="hero__photo">
              <img src="/profile.jpg" alt="Portrait of Pranav Krishna Kandi" />
              <span className="hero__photo-tag">Eluru, Andhra Pradesh</span>
            </div>
            
            <div style={{
              position: 'absolute',
              top: '-15%',
              right: '-10%',
              fontFamily: "'Caveat', cursive",
              fontSize: '3.5rem',
              color: 'rgba(20, 184, 166, 0.6)',
              transform: 'rotate(10deg)',
              zIndex: 2,
              pointerEvents: 'none',
              textShadow: '0 0 10px rgba(20, 184, 166, 0.4)'
            }}>
              Ronin // 浪人
            </div>
          </motion.div>
        </div>
      </header>

      <Marquee />

      <section className="container">
        <motion.div 
          className="section__head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Featured Work</span>
          <h2 className="section__title" style={{ fontSize: '3rem', marginBottom: '1rem', border: 'none' }}>
            Two apps, shipped end to end
          </h2>
          <p className="section__sub">
            Decoupled backends, real authentication, and AI integrations that do more than call an API once.
          </p>
        </motion.div>

        <div className="proj-grid">
          <motion.article 
            className="proj-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="proj-card__top">
              <h3 className="proj-card__name">Crescendo</h3>
              <a href="https://crescendo-pf8l.vercel.app" target="_blank" rel="noreferrer" className="proj-card__link">
                Live demo ↗
              </a>
            </div>
            <p className="proj-card__desc">
              A gamified RPG productivity platform — streaks cost you "Aura," ranks gate your rituals, and Gemini AI breaks quests into subtasks.
            </p>
            <div className="proj-card__tags">
              <span className="tag">Django 5.2</span>
              <span className="tag">DRF</span>
              <span className="tag">React (Vite)</span>
              <span className="tag">Gemini API</span>
            </div>
          </motion.article>

          <motion.article 
            className="proj-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="proj-card__top">
              <h3 className="proj-card__name">Magic Todo</h3>
              <a href="https://magic-todo-mrvz.vercel.app" target="_blank" rel="noreferrer" className="proj-card__link">
                Live demo ↗
              </a>
            </div>
            <p className="proj-card__desc">
              An AI-powered task architect that deconstructs goals into actionable steps, with full CRUD and resilient retry logic baked in.
            </p>
            <div className="proj-card__tags">
              <span className="tag">DRF</span>
              <span className="tag">React.js</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </motion.article>
        </div>

        <motion.div 
          className="view-all-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/experience" className="btn-secondary">
            See full case studies
          </Link>
        </motion.div>
      </section>
    </>
  );
}
