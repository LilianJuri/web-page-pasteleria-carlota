import { Link } from 'react-router-dom'

const Productos = () => {
    return (
        <section>
            <h1>Productos</h1>
            <ul>
                <li>
                    <Link to='/productos/tortas'> Tortas</Link>
                </li>
                <li>
                    <Link to='/productos/tortas'> Postres</Link>
                </li>
                <li>
                    <Link to='/productos/tortas'> Pasteleria Fina</Link>
                </li>
            </ul>
        </section>
    )
}

export default Productos;