import "./Input.css";
import PropTypes from "prop-types";

const Input = ({ label, type, placeholder }) => {
	return (
		<div>
			<label>
				{label}
				<input type={type} placeholder={placeholder} />
			</label>
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
};
export default Input;
