import products from "../../../src/products.json";
import React, {Component} from "react";
import CategoryProduct from '../Product/CategoryProduct';
import NavBar from "../NavBar/NavBar";
import ButtomBar from "../ButtomBar/ButtomBar";
import "./Pages.css"

export default class ListAll extends Component {
    render() {
        return (
            <div className="listall">
                <NavBar/>
                <h1>CATEGORY</h1>
                <ul type="none">
                {products.map((product) => (
                    <li key={product.name} >
                        <CategoryProduct image={product.image} name={product.name} property={product.property} />
                    </li>
                ))}
                </ul>
                <ButtomBar/>
            </div>
        )
    }
}