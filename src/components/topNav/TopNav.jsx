import { FaRegBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "./TopNav.css";

const TopNav = () => {
	return (
		<div className="productshdr-1">
			<h1>Products</h1>
			<div className="productshdr-2">
				<span className="bell">
					<FaRegBell />
					<div className="dot"></div>
				</span>
				<div className="avatarBox">
					<img
						src="https://avatar.iran.liara.run/public/boy?username=Rhytham"
						alt="personImage"
					/>
					<span className="name">Mathews Gill</span>
					<span>
						<FaChevronDown />
					</span>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
