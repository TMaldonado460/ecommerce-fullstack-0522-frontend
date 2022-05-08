import {useState} from "react";
import {FaHeart,FaRegHeart} from "react-icons/fa";
import styled from "styled-components";

const GenericProduct = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleClick = () => {
        setIsFavorite(!isFavorite);
    }
    return (
        <Container>
            <ProductImg>
                <img src={props.image} alt={props.name} />
                <button onClick={handleClick}>
                    {isFavorite ?<FaHeart className="heart2" /> : <FaRegHeart className="heart2" />}
                </button>
            </ProductImg>
            <Name>{props.name}</Name>
            <Price>{props.price}</Price>
        </Container>
    );
}
const Container = styled.div`
    width: 190px;
    
    `;
const ProductImg = styled.div`
    position: relative;
    margin: 0 10px;
    img{
        width: 100%;
    }
    `;
const Name = styled.h3`
    color: #1C82B8;
    font-size: 14px;
    `;
const Price = styled.p`
    color: #5D7987;
    font-size: 14px;
    `;
export default GenericProduct;