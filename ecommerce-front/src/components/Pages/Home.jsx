import Slideshow from '../Slideshow/Slideshow';
import NavBar from '../NavBar/NavBar';
import ButtomBar from '../ButtomBar/ButtomBar';
import './Pages.css';
import products from '../../products.json';
import GenericProduct from '../Product/GenericProduct';
import styled from 'styled-components';

const Home = () => {
    return (
        <div className="home">
            <NavBar/>
            <p className='promo'>¡En 6, 9 y 12 cuotas s/interes con Ahora12!</p>
            <Slideshow/>
            <div className='featured'>
                <h3>Productos Destacados</h3>
                <Ul type="none">
                    {products.map((product) => (
                    <li key={product.name}>
                        <GenericProduct image={product.image} name={product.name} price={product.price} />
                    </li>
                    ))}
                </Ul>
            </div>
            <div className='offer'>
                <h3>Ofertas imperdibles</h3>
                <Ul type="none">
                    {products.map((product) => (
                    <li key={product.name}>
                        <GenericProduct image={product.image} name={product.name} price={product.price} />
                    </li>
                    ))}
                </Ul>
            </div>
            <ButtomBar/>
        </div>
    );
}
const Ul = styled.ul`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    `;
export default Home;