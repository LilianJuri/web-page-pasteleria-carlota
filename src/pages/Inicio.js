import { Link } from "react-router-dom";
import './Inicio.css';
import BImage from "../img/background-inicio.jpg";


const Inicio = () => {
    return(
            <div className='inicio'>
                <div className="header-container" style={{ backgroundImage: `url(${BImage})`}}>
                    <div className="text-conteiner" >
                        <h1>Pasteleria Carlota</h1>
                        <p>La pasteleria mas dulce y copada de todas </p>
                        <p>e insoportablemente densa</p>
                    <Link to="/menu">
                        <button> Productos </button>
                    </Link>
                    </div>
                </div>
            </div>
    
    )
}

export default Inicio;