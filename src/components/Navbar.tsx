import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

export function Navbar() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Read from DOM attribute which was set by our initial script
    const currentTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' || 'dark';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (e) {
      // Ignore quota or privacy mode errors
    }
  };

  return (
    <header className="container">
      <nav className="navbar" aria-label="Main Navigation">
        <a href="#top" className="nav-brand" aria-label="Home">
          <span className="nav-brand-signal">iamhere</span>
        </a>
        
        <div className="nav-controls">
          <ul className="nav-links">
            <li>
              <a href="#timeline" className="nav-link">Timeline</a>
            </li>
            <li>
              <a href="#work" className="nav-link">Work</a>
            </li>
            <li>
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
          
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
