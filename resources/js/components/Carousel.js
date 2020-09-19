import React from "react";
import { Button } from "@material-ui/core";
const Carousel = () => {
    return (
        <>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
                data-interval="3000"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                    ></li>
                    <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                    ></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100"
                            src="/storage/carousel-images/crispy-bicol-express.jpg"
                            alt="First slide"
                        />
                        <div className="carousel-caption  d-md-block">
                            <h5>Crispy Bicol Express</h5>
                            <Button
                                color="secondary"
                                variant="contained"
                                size="small"
                            >
                                Check Recipe
                            </Button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="/storage/carousel-images/lutong-bahay-chicken-afritada.jpg"
                            alt="Second slide"
                        />
                        <div className="carousel-caption  d-md-block">
                            <h5>Chicken Afridata</h5>
                            <Button
                                color="secondary"
                                variant="contained"
                                size="small"
                            >
                                Check Recipe
                            </Button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="/storage/carousel-images/pork-bistek.jpg"
                            alt="Third slide"
                        />
                        <div className="carousel-caption  d-md-block">
                            <h5>Pork Bistek</h5>
                            <Button
                                color="secondary"
                                variant="contained"
                                size="small"
                            >
                                Check Recipe
                            </Button>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
};

export default Carousel;
