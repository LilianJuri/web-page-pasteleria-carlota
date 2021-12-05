import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/inicio'>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/sobre-nosotros'>
                            Sobre nostros
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/productos'>
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacto'>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;