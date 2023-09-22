// context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function useDark() {
	return useContext(ThemeContext);
}

export function DarkProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme  = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme  }}>
			{children}
		</ThemeContext.Provider>
	);
}

