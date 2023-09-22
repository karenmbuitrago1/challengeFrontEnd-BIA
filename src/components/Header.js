// components/Header.js
import React from 'react';
import { useDark } from '@/context/darkContext';

function Header() {
  const { isDarkMode, toggleTheme } = useDark();

  return (
    <header className="header">
      <nav className="header__nav">
        <h1 className="header__title">Where in the world?</h1>
        <div className="header__darkmode">
          <button
            className="header__darkmode-button"
            title="Change mode (light/dark)"
            aria-label="Toggle Dark Mode"
            onClick={toggleTheme}
          >
            <span className="material-symbols-outlined">
              {isDarkMode ? 'light_mode' : 'clear_night'}
            </span>
            <p className="header__darkmode-text">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </p>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
