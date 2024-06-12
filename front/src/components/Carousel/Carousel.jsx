import React from 'react';
import './Carousel.css';

export const Carousel = (props) => {
  return (
    <div class="d-flex justify-content-evenly" style={{width:'100%', paddingTop: '5%'}}>
        <div style={{width:'100%'}}></div>
        <div id="carouselExampleFade" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require(`../../img/${props.first_carousel_imagen}`)} 
                        class="d-block mw-20" 
                        alt="something"
                        style={{width: '550px', height: '350px'}}
                        />
                </div>
                <div class="carousel-item">
                    <img src={require(`../../img/${props.second_carousel_imagen}`)} 
                        class="d-block mw-20"
                        alt="in a"
                        style={{width: '550px', height: '350px'}}
                    />
                </div>
                <div class="carousel-item">
                    <img src={require(`../../img/${props.third_carousel_imagen}`)}
                        class="d-block mw-20"
                        alt="carousel"
                        style={{width: '550px', height: '350px'}}
                    />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div style={{width:'100%'}}></div>
    </div>
    )
}
