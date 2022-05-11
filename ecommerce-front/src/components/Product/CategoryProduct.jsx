import {useState} from "react";
import {FaHeart,FaRegHeart,FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";
import styled from "styled-components";
import Heart from "./Heart";

const CategoryProduct = (props) =>{
    const [isFavorite, setIsFavorite] = useState(false);
    const handleClick = () => {
        setIsFavorite(!isFavorite);
    }
    
    const amountStars = () => {
        let stars = [];
        for(let i = 0; i < props.valoration; i++){
            stars.push(<FaStar key={i}/>);
        }
        if(props.valoration - Math.floor(props.valoration) > 0){
            stars.pop();
            stars.push(<FaStarHalfAlt key={stars.length}/>);
        } 
        for(let i = stars.length; i < 5; i++){
            stars.push(<FaRegStar key={stars.length}/>);
        }
        return stars;
    }

    return (
        <Product>
            <ProductImg>
                <img src={props.image} alt="img"/>
                <Heart isLiked={isFavorite} onClick={handleClick} size={45} />
            </ProductImg>
            <Propiedades>
                <Subtitulo>{props.name}</Subtitulo>
                <Star>
                    {amountStars()} ({props.valoration})
                </Star>
                <Description>{props.property[0]}</Description>
            </Propiedades>
            <ButtonCont>
                <Button>Add +</Button>
                <Button>Info</Button>
            </ButtonCont>
        </Product>
    );
}

const Propiedades = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 calc(var(--padding-increment) * 4);
    `;

const Product = styled.div`
    font-family: Roboto;
    max-width: 380px;
    box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
    margin-bottom: calc(var(--padding-increment) * 5);
    `;
const ProductImg = styled.div`
    position: relative;
    margin: 0;
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
    padding: 0 calc(var(--padding-increment) * 4) calc(var(--padding-increment) * 6);
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