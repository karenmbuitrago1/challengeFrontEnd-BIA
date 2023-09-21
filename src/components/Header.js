import { Nunito_Sans } from 'next/font/google'
import { useState } from 'react';
import dynamic from 'next/dynamic';
const nunito = Nunito_Sans({ subsets: ['latin'] })

const DynamicStyles = dynamic(() => import(`./styles-${darkMode ? 'dark' : 'light'}.scss`), {
	ssr: false, // Evita la carga de estilos en el servidor
});

function Header() {

	const [darkMode, setDarkMode] = useState(false);

	const HandleDarkModeButton = () => {
		setDarkMode(!darkMode);
	}

	return (
		<header className={`header ${nunito.className} ${darkMode ? 'dark' : 'light'}`}>
			<nav className="header__nav">
				<h1 className="header__title">Where in the world?</h1>
				<div className="header__darkmode">
					<button
						className={`header__darkmode-button ${darkMode ? 'dark' : 'light'}`}
						aria-label="Toggle Dark Mode"
						onClick={HandleDarkModeButton}>
						<span className="material-symbols-outlined">clear_night</span>
						<p className="header__darkmode-text">{darkMode ? 'Light Mode' : 'Dark Mode'}</p>
					</button>
				</div>
			</nav>
		</header>
	);
}

export default Header;