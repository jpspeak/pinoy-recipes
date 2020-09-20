import React from "react";
import MyAppBar from "./MyAppBar";
import Carousel from "./Carousel";

import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    clearPadding: {
        [theme.breakpoints.down("sm")]: {
            padding: 0
        }
    }
}));
const App = () => {
    const classes = useStyles();
    return (
        <>
            <MyAppBar />
            <Container maxWidth="lg" className={classes.clearPadding}>
                <Carousel />
            </Container>
        </>
    );
};

export default App;
