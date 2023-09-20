import { Nunito_Sans } from 'next/font/google'
const nunito = Nunito_Sans({ subsets: ['latin'] })

function Header() {
	return (
		<header className={`header ${nunito.className}`}>
			<nav className="header__nav">
				<div className="header__title">Where in the world?</div>
				<div className="header__darkmode">
					<button className="header__darkmode-button" aria-label="Toggle Dark Mode">
						<span className="material-symbols-outlined">clear_night</span>
						<p className="header__darkmode-text">Dark Mode</p>
					</button>
				</div>
			</nav>
		</header>
	);
}

export default Header;