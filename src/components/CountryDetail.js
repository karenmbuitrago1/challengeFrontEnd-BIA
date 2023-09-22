import { useRouter } from 'next/router';
import Layout from '@/layouts/MainLayout';

const CountryDetail = ({ country }) => {
	const router = useRouter();
	const handleBackButtonClick = () => {
		router.push('/');
	};

	const nativeLanguageCode = Object.keys(country.languages)[0];
	const nativeName = country.name.nativeName[nativeLanguageCode];
	const nativeNameText = nativeName ? nativeName.common : '';
	const languagesArray = country.languages ? Object.values(country.languages) : [];
	const bordersArray = country.borders ? Object.values(country.borders) : [];
	const currencies = country.currencies[0] ? Object.keys(country.currencies)[0]: [];

	return (
		<Layout>
			<div className="country">
				<button
					className="back"
					onClick={handleBackButtonClick}>
					<span className="material-symbols-outlined">arrow_back</span>
					<p>Back</p>
				</button>
				<div className="country__detail">
					<div className="country__detail-flag">
						<figure className="country__flag-figure">
							<img
								className="country__flag-img"
								src={country.flags.svg}
								alt=""
							/>
						</figure>
					</div>
					<div className='country__detail-text' >
						<h1 className="description__title">{country.name.common}</h1>
						<div className="country__detail-description">
							<div className="description__elements">
								<p><strong>Native Name: </strong>{nativeNameText}</p>
								<p><strong>Population: </strong>{country.population}</p>
								<p><strong>Region: </strong>{country.region}</p>
								<p><strong>Sub-Region: </strong>{country.subregion}</p>
								<p><strong>Capital: </strong>{country.capital}</p>
							</div>
							<div className="description__elements">
								<p><strong>Top Level Domain: </strong>{country.tld}</p>
								<p><strong>Currencies: </strong>{currencies}</p>
								<p><strong>Languages: </strong> {languagesArray.join(', ')}</p>
							</div>
						</div>
						<div className="description__borders">
							<strong>Border Countries: </strong>
							{bordersArray.map((border, index) => (
								<button key={index} className="border-button">
									{border}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default CountryDetail;
