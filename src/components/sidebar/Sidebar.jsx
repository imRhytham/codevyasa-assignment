import { FaChartPie, FaFileAlt, FaChartBar } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="logo">logo</div>
			<ul>
				<li>
					<FaFileAlt />{" "}
				</li>
				<li>
					<BsFillGrid1X2Fill />{" "}
				</li>
				<li>
					<FaChartPie />{" "}
				</li>
				<li>
					<FaChartBar />{" "}
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
