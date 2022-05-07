import products from "../../../src/products.json";
import React, {Component} from "react";
import CategoryProduct from '../Product/CategoryProduct';
import NavBar from "../NavBar/NavBar";

export default class ListAll extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>CATEGORY</h1>
                {products.map((product, index) => (
                    <ul type="none">
                        <li key={index.toString} >
                            <CategoryProduct image={product.image} name={product.name} property={product.property} />
                        </li>
                    </ul>
                ))}
            </div>
        )
    }
}