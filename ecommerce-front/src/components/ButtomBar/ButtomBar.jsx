import { FaBell, FaHeart, FaInfoCircle, FaSearch } from "react-icons/fa";
import styled from "styled-components";

const ButtomBar = () => {
    return (
        <Container>
            <Icons>
                <FaHeart className="icon"/>
                <Subtitulo>Favorites</Subtitulo>
            </Icons>
            <Icons>
                <FaSearch className="icon"/>
                <Subtitulo>Favorites</Subtitulo>
            </Icons>
            <Icons>
                <FaBell className="icon"/>
                <Subtitulo>Favorites</Subtitulo>
            </Icons>
            <Icons>
                <FaInfoCircle className="icon"/>
                <Subtitulo>Favorites</Subtitulo>
            </Icons>
        </Container>
    );
}
const Container = styled.div`
    background-color: #9bf7e4;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Roboto;
    position: sticky;
    bottom: 0px;
    z-index: 15;
    padding: 0 10px;
    `;
const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #1C82B8;
    `;
const Subtitulo = styled.h6`
    font-size: 10px;
    font-weight: 400;
    `;    
    
export default ButtomBar;