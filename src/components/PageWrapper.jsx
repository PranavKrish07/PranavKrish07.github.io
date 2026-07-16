import { motion } from 'framer-motion';

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ paddingTop: '100px' }} // Account for fixed navbar
    >
      {children}
    </motion.div>
  );
}
