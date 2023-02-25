import './style.css';
import carImg from '../../assets/car.png'

export default function CatalogCard() {

    return (
        <div className='ds-catalog-card'>
            <img src={carImg} alt="audi vermelha" />
            <h3>Lorem ipsum dolor</h3>
        </div>
    );
}