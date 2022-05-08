import {useState} from "react";
import {FaHeart,FaRegHeart,FaStar} from "react-icons/fa";
import styled from "styled-components";

const CategoryProduct = (props) =>{
    const [isFavorite, setIsFavorite] = useState(false);
    const handleClick = () => {
        setIsFavorite(!isFavorite);
    }
    
    return (
        <Product>
            <ProductImg>
                <img src={props.image} alt="img"/>
                <button onClick={handleClick}>
                    {isFavorite ?<FaHeart className="heart" /> : <FaRegHeart className="heart" />}
                </button>
            </ProductImg>
            <div>
                <Subtitulo>{props.name}</Subtitulo>
                <Star>
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </Star>
                <Description>{props.property[0]}</Description>
            </div>
            <ButtonCont>
                <Button>Add +</Button>
                <Button>Info</Button>
            </ButtonCont>
        </Product>
    );
}
const Product = styled.div`
    font-family: Roboto;
    max-width: 380px;
    `;
const ProductImg = styled.div`
    margin: 5px;
    position: relative;
    img{
        width: 100%;
    }
    `;
const Subtitulo = styled.h2`
        text-align: left;
        font-size: 35px;
        font-weight: 900;
        color: #1C82B8;
        margin: 5px 0 0 5px;
        `;
const Description = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 0 5px;
    text-align: left;
    `;
const Star = styled.div`
    color:#ED6A58;
    `;
const ButtonCont = styled.div`
    display: flex;
    align-items: center;
    `;
const Button = styled.button`
width: 90px;
    height: 40px;
    border: 1px solid #5D7987;
    border-radius: 100px;
    background-color: #5D7987;
    color: #49EBCA;
    margin: 15px 0 5px 5px;
    font-size: 14px;
    `;
export default CategoryProduct;