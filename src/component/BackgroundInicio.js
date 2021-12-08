import './BackgroundInicio.css';
import backgroundImage from '../img/background-inicio.jpg';

const BackgroundInicio = () => {
    return(
    <div className="banner-top">
        <img src={backgroundImage} className='background-image-inicio' alt="img-banner-top" />
    </div>
    )
}

export default BackgroundInicio;