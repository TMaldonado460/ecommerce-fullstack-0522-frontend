import { FaBell, FaHeart, FaInfoCircle, FaSearch } from "react-icons/fa";
import "./ButtomBar.css";

export default function ButtomBar () {
    return (
        <div className="buttom-bar">
            <div className="icons">
                <FaHeart className="icon"/>
                <h6>Favorites</h6>
            </div>
            <div className="icons">
                <FaSearch className="icon"/>
                <h6>Favorites</h6>
            </div>
            <div className="icons">
                <FaBell className="icon"/>
                <h6>Favorites</h6>
            </div>
            <div className="icons">
                <FaInfoCircle className="icon"/>
                <h6>Favorites</h6>
            </div>
        </div>
    );
}