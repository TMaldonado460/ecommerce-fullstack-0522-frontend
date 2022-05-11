import {FaHeart,FaRegHeart} from "react-icons/fa";
import styled from "styled-components";


const Heart = ({ isLiked, onClick }) => {
    const Icon = isLiked ? FaHeart : FaRegHeart;
    return (
        <Button onClick={onClick}>  
            <Icon className="heart" />
        </Button>
    );
}

const Button = styled.button`
    background-color: white;
    border: none;
    color: var(--color-white);
    width: 30px;
    height: 30px;

    top: 0px;
    right: 10px;
    position: absolute;

    font-size: 16px;
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