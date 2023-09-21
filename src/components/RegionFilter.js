const RegionFilter = ({ regions, onSelectRegion }) => {
	return (
		<div className="flags__region">
			<label htmlFor="regionSelect"></label>
			<select
				id="regionSelect"
				className="flags__region--filter"
				onChange={(e) => onSelectRegion(e.target.value)}>
				<option value="">Filter by Region</option>
				{regions.map((region, index) => (
					<option key={index} value={region}>
						{region}
					</option>
				))}
			</select>
		</div>
	);
};

export default RegionFilter;
