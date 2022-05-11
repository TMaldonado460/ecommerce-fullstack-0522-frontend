import {useState} from "react";
import Heart from "./Heart";
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
                <Heart isLiked={isFavorite} onClick={handleClick} />
            </ProductImg>
            <Name>{props.name}</Name>
            <Price>{props.price}</Price>
        </Container>
    );
}
const Container = styled.div`
    width: 190px;
    margin: 0 calc(var(--padding-increment) * 5) 0 0 ;
    `;
const ProductImg = styled.div`
    position: relative;
    margin: 0;
    img{
        width: 100%;
    }
    `;
const Name = styled.h3`
    color: var(--color-primary);
    padding: calc(var(--padding-increment) * 3) 0 var(--padding-increment) 0;
    font-size: 14px;
    `;
const Price = styled.p`
    color: var(--color-dark);
    font-size: 20px;
    font-weight: bold;
    `;
export default GenericProduct;