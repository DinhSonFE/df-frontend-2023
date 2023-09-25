import logo from '../../Assets/Images/avatar.png';
import ButtonToggleTheme from '../ButtonToggleTheme/ButtonToggleTheme';
import './Navbar.css';
function NavBar(props) {
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='nav-left'>
					<p>
						Book<span>Store</span>
					</p>
				</div>
				<div className='nav-right'>
					<ButtonToggleTheme></ButtonToggleTheme>
					<div className='user'>
						<img src={logo} alt='avatar' />
						<p>SownTe</p>
					</div>
				</div>
			</div>
		</div>
	);
}

NavBar.propTypes = {};

export default NavBar;
