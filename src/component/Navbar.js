import {useState} from 'react';
import { Link } from 'react-router-dom';
import imenu from '../img/icon-menu.png';
import './Components.css';
import ixmenu from '../img/icon-menu-x.png';
import { SidebarData } from './SidebarData';


function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className='navbar'>
            < Link to='#' className='menu-link'>
                <img src={imenu} className='icon-menu' alt="icono-menu" onClick={showSidebar} />
            </ Link>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <img src={ixmenu} className="icon-menu" alt="icono-menu-x" />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} >
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })} 
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
