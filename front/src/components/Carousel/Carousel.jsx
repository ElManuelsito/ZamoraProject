import React from 'react';
import './Carousel.css';

export const Carousel = (props) => {
  return (
    <div className="d-flex justify-content-evenly" style={{width:'100%', paddingTop: '5%'}}>
        <div style={{width:'100%'}}></div>
        <div id="carouselExampleFade" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require(`../../img/${props.first_carousel_imagen}`)} 
                        className="d-block mw-20" 
                        alt="something"
                        style={{width: '550px', height: '350px'}}
                        />
                </div>
                <div className="carousel-item">
                    <img src={require(`../../img/${props.second_carousel_imagen}`)} 
                        className="d-block mw-20"
                        alt="in a"
                        style={{width: '550px', height: '350px'}}
                    />
                </div>
                <div className="carousel-item">
                    <img src={require(`../../img/${props.third_carousel_imagen}`)}
                        className="d-block mw-20"
                        alt="carousel"
                        style={{width: '550px', height: '350px'}}
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div style={{width:'100%'}}></div>
    </div>
    )
}
