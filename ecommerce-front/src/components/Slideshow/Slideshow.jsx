import {Link} from "react-router-dom"
import img1 from "../../img/slide1.jpg"
import img2 from "../../img/slide2.jpg"
import img3 from "../../img/slide3.jpg"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import styled   from "styled-components"
import { React,useRef} from "react"

const Slideshow = () => {
    const slideshow = useRef(null);
    const nextSlide = () => {
        //compruebo que haya slides siguientes
        if (slideshow.current.children.length > 0) {
            //obtengo el primer hijo
            const firstElement = slideshow.current.children[0];
            //establezco la transicion para el proximo slide
            slideshow.current.style.transition= "500ms ease-out all";
            //establezco el tamano del slide
            const slideSize  = slideshow.current.children[0].offsetWidth;
            //muevo el slide
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;
            //elimino la transicion para el slide actual
            const transitionSlide = () => {
                //reinicio la posicion del slide
            slideshow.current.style.transition="none";
            slideshow.current.style.transform="translateX(0)";
                //tomo el primer slide y lo pongo al final
            slideshow.current.appendChild(firstElement);
                //remuevo el evento de la transicion para que cuando use la funcion prevSlide no se ejecute de nuevo
            slideshow.current.removeEventListener("transitionend", transitionSlide);
            }
            //espero a que termine la transicion
            slideshow.current.addEventListener("transitionend", transitionSlide);
        }
    }
    const prevSlide = () => {
        //compruebo que haya slides anteriores
        if (slideshow.current.children.length > 0) {
            //obtengo el ultimo hijo
            const lastElement = slideshow.current.children[slideshow.current.children.length - 1];
            //lo pondo al principio
            slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);
            slideshow.current.style.transition= "none";
            //establezco el tamano del slide
            const slideSize  = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;
            //establezco la transicion para el siguiente slide
            setTimeout(() => {
                slideshow.current.style.transition= "500ms ease-out all";
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }
   

    return (
        <Container>
            <SlideshowContainer ref={slideshow} >
                <Slide className="slide">
                    <Link to="/" >
                        <img src={img1} alt="slide1"/>
                    </Link>
                </Slide>
                <Slide className="slide">
                    <Link to="/" >
                        <img src={img2} alt="slide1"/>
                    </Link>
                </Slide>
                <Slide className="slide">
                    <Link to="/" >
                        <img src={img3} alt="slide1"/>
                    </Link>
                </Slide>
            </SlideshowContainer>    
            <div>
                <Left onClick={prevSlide} >
                    <FaArrowAltCircleLeft/>
                </Left>
                <Right onClick={nextSlide}>
                    <FaArrowAltCircleRight/>
                </Right>
            </div>
        </Container>
    );
}
const Container = styled.div`
    position: relative;

`;
const SlideshowContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    `;
const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: 0.5s ease all;
    z-index: 5;
    img {
        width: 100%;
        vertical-align: top;
    }
    `;
const Left = styled.button`
    position: absolute;
    top: 45%;
    left: 0;
    z-index: 8;
    color: #ED6A58;
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    transition: 0.5s ease all;
    &:hover {
        color: #B80D1C;
    }
`;
const Right = styled.button`
    position: absolute;
    top: 45%;
    right:0 ;
    z-index: 8;
    color: #ED6A58;
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    transition: 0.2s ease all;
    &:hover {
        color: #B80D1C;
    }
`;

export default Slideshow;
