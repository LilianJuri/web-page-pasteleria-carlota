import './Footer.css';
import facebook from '../img/facebook.png';
import instagram  from '../img/instagram.png';


const Banner = () => {
    return(
    <div className="footer-bottom">
        <div className="leftSide">
            <img src={facebook} className="icon-footer" alt="icono-footer-facebok" />
            <img src={instagram} className="icon-footer" alt="icono-footer-instagram" />
        </div>
    </div>
    )
}

export default Banner;