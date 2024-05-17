import "./DataComponent.css";
import { IoFilterSharp } from "react-icons/io5";
import { PiExportBold } from "react-icons/pi";
import Table from "../ui/Table";
import PropTypes from "prop-types";

const DataComponent = ({ toggleFilterMenu }) => {
	const columns = [
		"Sr No.",
		"Heading 1",
		"Heading 2",
		"Heading 3",
		"Heading 4",
		"Heading 5",
		"Heading 6",
	];
	const data = Array.from({ length: 100 }, (_, index) => ({
		"Sr No.": index + 1,
		"Heading 1": `Item ${index + 1}`,
		"Heading 2": `Item ${index + 1}`,
		"Heading 3": `Item ${index + 1}`,
		"Heading 4": `Item ${index + 1}`,
		"Heading 5": `Item ${index + 1}`,
		"Heading 6": `Item ${index + 1}`,
	}));

	return (
		<div className="table-container">
			<div className="table-header">
				<input type="text" className="search-box" placeholder="🔎︎" />
				<div className="action-buttons">
					<button className="add-btn">+ Add Products</button>
					<button className="filter-btn" onClick={toggleFilterMenu}>
						{" "}
						<IoFilterSharp />
						Filters
					</button>
					<button className="export-btn">
						{" "}
						<PiExportBold />
						Export
					</button>
				</div>
			</div>
			<div>
				<Table columns={columns} data={data} rowsPerPage={10} />
			</div>
		</div>
	);
};

DataComponent.propTypes = {
	toggleFilterMenu: PropTypes.func.isRequired,
};

export default DataComponent;
