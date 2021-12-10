import './Footer.css';
import facebook from '../img/facebook.png';
import instagram  from '../img/instagram.png';


const Banner = () => {
    return(
    <div className="footer-bottom">
        <div className="right-side">
            <h2>Seguinos en: </h2>
            <a href="https://www.facebook.com/"><img src={facebook} className="icon-footer" alt="icono-footer-facebok" /></a>
            <a href="https://www.instagram.com/?hl=es-la"><img src={instagram} className="icon-footer" alt="icono-footer-instagram" /></a>
        </div>
        <div className="center-side">
            <h2>Contacto</h2>
            <p>Telefono: +54 9 11 2936 3847</p>
            <p>Direccion: Soler 3723</p>
            <p>Correo: pasteleriaCarlota@gmail.com</p>
        </div>
        <div className="left-side">
            <h1 className="title-footer">Pasteleria Carlota</h1>
        </div>
    </div>
    )
}

export default Banner;