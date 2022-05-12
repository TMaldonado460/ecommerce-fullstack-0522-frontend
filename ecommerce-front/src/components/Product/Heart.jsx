import {FaHeart,FaRegHeart} from "react-icons/fa";
import styled from "styled-components";

let thisSize = 30;

const Heart = ({ isLiked, onClick, size }) => {
    const Icon = isLiked ? FaHeart : FaRegHeart;
    size && (thisSize = size);

    return (
        <Button onClick={onClick} style={{ fontSize: thisSize/1.5, width: thisSize, height: thisSize }}>  
            <Icon className="heart" />
        </Button>
    );
}


const Button = styled.button`
    background-color: white;
    border: none;
    color: var(--color-contrast-1);
    top: 0px;
    right: 10px;
    position: absolute;
    font-weight: 500;
    border-radius: 100%;
    margin: 5px;
    cursor: pointer;
    box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
    display: flex;
    align-items: center;
    justify-content: center;
    `;



export default Heart;