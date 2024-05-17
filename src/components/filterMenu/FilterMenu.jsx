import "./FilterMenu.css";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Input from "../ui/Input";

const FilterMenu = ({ closeSidebar }) => {
	return (
		<div className="filter-sidebar">
			<div className="filter-header">
				<h2>Filters</h2>
				<button className="close-btn" onClick={closeSidebar}>
					<FaTimes />
				</button>
			</div>
			<div className="filter-content">
				<Input
					label="Product Name"
					type="text"
					placeholder="Test Product Name"
				/>
				<label>
					Category
					<select>
						<option>Category</option>
					</select>
				</label>
				<Input label="Event Name" type="text" placeholder="Event Name" />
				<Input label="Match Name" type="text" placeholder="Test Match Name" />

				<label>
					Team
					<select>
						<option>Team</option>
					</select>
				</label>
			</div>
		</div>
	);
};

FilterMenu.propTypes = {
	closeSidebar: PropTypes.func.isRequired,
};

export default FilterMenu;
