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
            <>
            <Nav>
                <Drop onClick={handleClick}>
                    {isDrop ? <FaAngleLeft />:<FaBars />}
                </Drop>
                <NavMenu className={isDrop ? 'nav-menu active': 'nav-menu'}>
                    <Link className="path-Bar" to="/">Home</Link>
                    <Link className="path-Bar" to="/products">Mujeres</Link>
                    <Link className="path-Bar" to="/products">Hombres</Link>
                    <Link className="path-Bar" to="/products">Insumos</Link>
                    <Link className="path-Bar" to="/">Contacto</Link>
                </NavMenu> 
                <Titulo>Proyecto Vacaciones</Titulo>
                <Ul>
                    <FaCartArrowDown className="iconstop"/> <FaUserCircle className="iconstop"/>
                </Ul>
            </Nav>
            <Filler />
            </>
    );
} 
const Nav = styled.div`
background-color: var(--color-background);
height: 70px;
padding: 0 calc(var(--padding-increment) * 4);
display: flex;
justify-content: space-between;
align-items: center;
font-family: Roboto;
position: fixed;
width: 100%;
top: 0;
z-index: 15;
border-bottom: 1px solid #ccc;
box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
`;
const Drop = styled.div`
    color:#1C82B8;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Titulo = styled.span`
    font-size: 18px;
    font-weight: bold;
    color:#1C82B8;
`;

const Ul = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    gap: 10px;

    > * {
        font-size: 20px;
        color: var(--color-primary);
    }
    `;


const NavMenu = styled.ul`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100vh;
    position: absolute;
    top: 70px;
    left: -100%;
    background-color: var(--color-background);
    z-index: -1;
    transition: all 0.5s;
    opacity: 1;
    padding-top: calc(var(--padding-increment) * 10);
    &.active {
        opacity: 1;
        left: 0;
        background-color: var(--color-background);
        transition: all 0.5s;
        z-index: 0;
        box-shadow: inset 0 2px 10px rgb(0 0 0 / 20%);
        
    }
    > * {
        text-decoration: none;
        color: var(--color-primary);
        font-weight: 700;
        cursor: pointer;
        padding: 0 calc(var(--padding-increment) * 4);
    }
    > *:first-child {
        margin-top: calc(var(--padding-increment) * 4);
    }
    > *:not(:last-child):after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.1);
        transition: all 0.5s;
        opacity: 1;
        margin: calc(var(--padding-increment) * 5) 0;
    }

    `;

const Filler = styled.div`
    height: 70px;
    `;

export default NavBar;
