import { NavLink } from 'react-router-dom';
import imenu from '../img/icon-menu.png';

function Navbar() {
    return (
        <div>
            <NavLink to='/inicio'>
                <img src={imenu} alt="icono-menu" />
            </NavLink>
        </div>
    )
}

export default Navbar;