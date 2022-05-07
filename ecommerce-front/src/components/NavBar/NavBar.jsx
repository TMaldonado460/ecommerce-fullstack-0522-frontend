import "./NavBar.css";
import {useState} from "react";
import {FaAngleLeft, FaBars, FaCartArrowDown, FaUserCircle} from "react-icons/fa";
export default function NavBar () {
    const [isDrop, setIsDrop] = useState(false);
    const handleClick = () => {
        setIsDrop(!isDrop);
    }
    return (
            <nav>
                <div className="icon-drop" onClick={handleClick}>
                    {isDrop ? <FaAngleLeft />:<FaBars />}
                </div>
                 <ul className={isDrop ? 'nav-menu active': 'nav-menu'}>
                    <li>Home</li>
                    <li>Mujeres</li>
                    <li>Hombres</li>
                    <li>Insumos</li>
                    <li>Contacto</li>
                </ul> 
                <div>
                    <h3>Proyecto Vacaciones</h3>
                </div>
                <div>
                    <FaCartArrowDown className="icons"/> <FaUserCircle className="icons"/>
                </div>
            </nav>
    );
} 

