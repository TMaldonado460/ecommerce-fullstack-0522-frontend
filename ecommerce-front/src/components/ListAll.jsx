import products from '../products.json';
import React, {Component} from "react";
import {Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ListAll extends Component {
    render() {
        return (
           
            <Container>
                <h1>CATEGORY</h1>
                {products.map((product, index) => (
                    <ul>
                        
                        <li key={index} >
                            <img className='img-fluid' src={product.image} alt={product.name} />
                            <h1 className='primary'>{product.name}</h1>
                            <p>{product.valoration}</p>
                            <h5>{product.price}</h5>
                            <Button>Add +</Button><Button>Info</Button>
                        </li>
                        
                    </ul>
                ))}
            </Container>
        )
    }
}