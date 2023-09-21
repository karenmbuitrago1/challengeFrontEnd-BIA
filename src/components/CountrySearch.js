import { useState } from "react";

const CountrySearch = ({ onSearch }) => {
	const [searchCountry, setSearchCountry] = useState("");

	const handleChange = (e) => {
		const { value } = e.target;
		setSearchCountry(value)
		onSearch(value);
	}

	return (
		<div className="flags__search">
			<form className="flags__search--container">
				<span className="material-symbols-outlined --search">search</span>
				<input
					className="flags__search-input"
					type="search"
					placeholder="Search for a country..."
					value={searchCountry}
					onChange={handleChange}
				/>
			</form>
		</div>
	)
}

export default CountrySearch;