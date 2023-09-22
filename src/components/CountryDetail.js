import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/layouts/MainLayout';

const CountryDetail = ({ country }) => {
	const router = useRouter();
	const handleBackButtonClick = () => {
		router.push('/');
	};

	const languagesArray = Object.values(country.languages);
	const bordersArray = Object.values(country.borders);

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
								<p><strong>Population: </strong>{country.population}</p>
								<p><strong>Region: </strong>{country.region}</p>
								<p><strong>Sub-Region: </strong>{country.subregion}</p>
								<p><strong>Capital: </strong>{country.capital}</p>
							</div>
							<div className="description__elements">
								<p><strong>Top Level Domain: </strong>{country.tld}</p>
								<p><strong>Currencies: </strong>{country.tld}</p>
								<p><strong>Languages: </strong> {languagesArray.join(', ')}</p>
							</div>
						</div>
						<div className="description__borders">
							<p><strong>Border Countries:</strong> {bordersArray.join(', ')}</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default CountryDetail;
