import { useState } from "react";
import "./HomeSortSection.css";

const HomeSortSection = ({ setSearchQueries }) => {
	const [sortBy, setSortBy] = useState('created_at');
	const [order, setOrder] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault()

        setSearchQueries(currentSearchQueries => {
            const newSearchQueries = {...currentSearchQueries}
            newSearchQueries.sort_by = sortBy
            newSearchQueries.order = order ? "ASC" : "DESC"

            return newSearchQueries
        })
        
    }

    
	return (
		<form onSubmit={handleSubmit}>
			<label>Sort by</label>
			<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
				<option value='created_at'>Date</option>
				<option value='comment_count'>Comment Count</option>
				<option value='votes'>Votes</option>
			</select>

			<div className="toggle">
				<input
					type="checkbox"
					checked={order}
					onChange={() => {
                        setOrder((current) => !current);
					}}
                    />
                    <label></label>
			</div>
            <button>search</button>
		</form>
	);
};

export default HomeSortSection;
