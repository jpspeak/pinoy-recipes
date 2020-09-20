import React from "react";
import { Button } from "@material-ui/core";

// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles(() => ({
//     title: {
//         width: "6vw"
//     }
// }));

const Carousel = () => {
    const styles = {
        title: {
            fontSize: "6vw"
        },
        button: { color: "white", borderColor: "white" }
    };
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
                    <div className="carousel-item active ">
                        <img
                            className="d-block w-100"
                            src="/storage/carousel-images/crispy-bicol-express.jpg"
                            alt="crispy-bicol-express"
                            style={{
                                filter: "brightness(70%)",
                                height: 400,
                                objectFit: "cover"
                            }}
                        />
                        <div className="carousel-caption">
                            <h3 style={styles.title}>Crispy Bicol Express</h3>
                            <Button
                                variant="outlined"
                                size="small"
                                disableElevatio
                                style={styles.button}
                            >
                                Check Recipe
                            </Button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="/storage/carousel-images/chicken-afritada.jpg"
                            alt="chicken-afritada"
                            style={{
                                filter: "brightness(70%)",
                                height: 400,
                                objectFit: "cover"
                            }}
                        />
                        <div className="carousel-caption  d-md-block">
                            <h3 style={styles.title}>Chicken Afridata</h3>
                            <Button
                                variant="outlined"
                                size="small"
                                style={styles.button}
                            >
                                Check Recipe
                            </Button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="/storage/carousel-images/pork-bistek.jpg"
                            alt="pork-bistek"
                            style={{
                                filter: "brightness(70%)",
                                height: 400,
                                objectFit: "cover"
                            }}
                        />
                        <div className="carousel-caption  d-md-block">
                            <h3 style={styles.title}>Pork Bistek</h3>
                            <Button
                                variant="outlined"
                                size="small"
                                style={styles.button}
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
