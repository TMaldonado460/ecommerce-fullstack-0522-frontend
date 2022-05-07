import "./Product.css";
import {useState} from "react";
import {FaHeart,FaRegHeart,FaStar} from "react-icons/fa";

export default function CategoryProduct(props) {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleClick = () => {
        setIsFavorite(!isFavorite);
    }
    
    return (
        <div className="product">
            <div className="product-img">
                <img src={props.image} alt="img"/>
                <button onClick={handleClick}>
                    {isFavorite ?<FaHeart className="heart" /> : <FaRegHeart className="heart" />}
                </button>
            </div>
            <div className="product-info">
                <h2>{props.name}</h2>
                <div className="star">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <p>{props.property[0]}</p>
            </div>
            <div className="products-buttons">
                <button>Add +</button>
                <button>Info</button>
            </div>
        </div>
    );
}