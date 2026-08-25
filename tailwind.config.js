/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        deepPurple: '#2e1065',
        electricViolet: '#7c3aed',
        // fallback to existing CSS variables
        purple: 'var(--purple-deep)',
        violet: 'var(--purple-vibrant)',
        lavender: 'var(--lavender-border)',
      },
      borderRadius: {
        sm: '12px',
        md: '20px',
        lg: '32px',
        full: '9999px',
      },
      boxShadow: {
        subtle: '0 10px 30px -10px rgba(76, 29, 149, 0.06)',
        card: '0 20px 40px -15px rgba(46, 16, 101, 0.08)',
        glow: '0 20px 50px -10px rgba(109, 40, 217, 0.25)',
      },
    },
  },
  plugins: [],
};
