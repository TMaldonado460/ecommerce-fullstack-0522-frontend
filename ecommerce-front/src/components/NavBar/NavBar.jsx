import styled from "styled-components";
import {useState} from "react";
import {FaAngleLeft, FaBars, FaCartArrowDown, FaUserCircle} from "react-icons/fa";
import {Link} from "react-router-dom";
const NavBar = () => {
    const [isDrop, setIsDrop] = useState(false);
    const handleClick = () => {
        setIsDrop(!isDrop);
    }
    return (
            <Nav>
                <Drop onClick={handleClick}>
                    {isDrop ? <FaAngleLeft />:<FaBars />}
                </Drop>
                <ul className={isDrop ? 'nav-menu active': 'nav-menu'}>
                    <Link className="path-Bar" to="/">Home</Link>
                    <Link className="path-Bar" to="/products">Mujeres</Link>
                    <Link className="path-Bar" to="/products">Hombres</Link>
                    <Link className="path-Bar" to="/products">Insumos</Link>
                    <Link className="path-Bar" to="/">Contacto</Link>
                </ul> 
                <Titulo>Proyecto Vacaciones</Titulo>
                <div>
                    <FaCartArrowDown className="iconstop"/> <FaUserCircle className="iconstop"/>
                </div>
            </Nav>
    );
} 
const Nav = styled.div`
background-color: var(--color-background);
height: 45px;
display: flex;
justify-content: space-between;
align-items: center;
font-family: Roboto;
position: sticky;
top: 0;
z-index: 15;
`;
const Drop = styled.div`
    color:#1C82B8;
    font-size: 20px;
    cursor: pointer;
    margin-left: 5px;
`;
const Titulo = styled.h3`
    font-size: 20px;
    font-weight: 400;
    margin-left: 25px;
    color:#1C82B8;
`;

export default NavBar;
