import { Link } from "react-router-dom";
import './Inicio.css';



const Inicio = () => {
    return(
            <div className='inicio'>
                <div className="inicio-container-i" >
                    <div className="text-conteiner-i" >
                        <h1>Pasteleria Carlota</h1>
                        <p>La pasteleria mas dulce y copada de todas <br/>e insoportablemente densa </p>
                    <Link to="/productos">
                        <button> Productos </button>
                    </Link>
                    </div>
                </div>
            </div>
    
    )
}

export default Inicio;