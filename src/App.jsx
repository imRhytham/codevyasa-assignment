import Sidebar from "./components/sidebar/Sidebar";
import TopNav from "./components/topNav/TopNav";
import "./App.css";
import { Events } from "./components/events/Events";
import DataComponent from "./components/dataComponent/DataComponent";
import { useState } from "react";
import FilterMenu from "./components/filterMenu/FilterMenu";

function App() {
	const [openFilterMenu, setOpenFilterMenu] = useState(false);

	const toggleFilterMenu = () => {
		setOpenFilterMenu(!openFilterMenu);
	};

	return (
		<>
			<div className="dashboard-container">
				<Sidebar />
				<div className="main-content">
					<TopNav />
					<Events />
					<DataComponent toggleFilterMenu={toggleFilterMenu} />
					{openFilterMenu && <FilterMenu closeSidebar={toggleFilterMenu} />}
				</div>
			</div>
		</>
	);
}

export default App;
