import IMAGES from "../assets/images";
import "../assets/styles/navbar.css";
import ButtonToggleTheme from "./ButtonToggleTheme";

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="nav-left">
					<p>
						Book<span>Store</span>
					</p>
				</div>
				<div className="nav-right">
					<ButtonToggleTheme />
					<div className="user">
						<img src={IMAGES.avatar} alt="avatar" />
						<p>SownTe</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
