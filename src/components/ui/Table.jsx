import { useState } from "react";
import PropTypes from "prop-types";
import "./Table.css";
import {
	FaAngleLeft,
	FaAngleRight,
	FaAnglesLeft,
	FaAnglesRight,
} from "react-icons/fa6";

const Table = ({ columns, data, rowsPerPage }) => {
	const [selectedRows, setSelectedRows] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(data.length / rowsPerPage);

	const handleSelectAll = (e) => {
		if (e.target.checked) {
			setSelectedRows(
				data
					.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
					.map((_, index) => index)
			);
		} else {
			setSelectedRows([]);
		}
	};

	const handleSelectRow = (index) => {
		if (selectedRows.includes(index)) {
			setSelectedRows(selectedRows.filter((row) => row !== index));
		} else {
			setSelectedRows([...selectedRows, index]);
		}
	};

	const handlePageChange = (page) => {
		setCurrentPage(page);
		setSelectedRows([]); // Clear selected rows when changing page
	};

	const renderPageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<button
					key={i}
					className={i === currentPage ? "active" : ""}
					onClick={() => handlePageChange(i)}
				>
					{i}
				</button>
			);
		}
		return pageNumbers;
	};

	// Calculate the data to display on the current page
	const start = (currentPage - 1) * rowsPerPage;
	const end = start + rowsPerPage;
	const currentData = data.slice(start, end);

	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>
							<input
								type="checkbox"
								checked={
									selectedRows.length === currentData.length &&
									currentData.length > 0
								}
								onChange={handleSelectAll}
							/>
						</th>
						{columns.map((col, index) => (
							<th key={index}>{col}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{currentData.map((row, rowIndex) => (
						<tr key={rowIndex}>
							<td>
								<input
									type="checkbox"
									checked={selectedRows.includes(rowIndex)}
									onChange={() => handleSelectRow(rowIndex)}
								/>
							</td>
							{columns.map((col, colIndex) => (
								<td key={colIndex}>{row[col]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div className="pagination">
				<button
					onClick={() => handlePageChange(1)}
					disabled={currentPage === 1}
				>
					<FaAnglesLeft />
				</button>
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					<FaAngleLeft />
				</button>
				{renderPageNumbers()}
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					<FaAngleRight />
				</button>
				<button
					onClick={() => handlePageChange(totalPages)}
					disabled={currentPage === totalPages}
				>
					<FaAnglesRight />
				</button>
			</div>
		</div>
	);
};

Table.propTypes = {
	columns: PropTypes.arrayOf(PropTypes.string).isRequired,
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	rowsPerPage: PropTypes.number.isRequired,
};

export default Table;
