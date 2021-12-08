import './Home.css';
import backgroundImage from '../img/background-inicio.jpg';

const Home = () => {
    return(
    <div >
        <img src={backgroundImage} className='background-image-inicio' alt="img-banner-top" />
    </div>
    )
}

export default Home;