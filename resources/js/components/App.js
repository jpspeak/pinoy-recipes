import React from "react";
import MyAppBar from "./MyAppBar";
import Carousel from "./Carousel";
import PinoyRecipesMarketNav from "./PinoyRecipesMarketNav";

import { Container } from "@material-ui/core";
import {
    makeStyles,
    createMuiTheme,
    ThemeProvider
} from "@material-ui/core/styles";

import { BrowserRouter as Router, Route } from "react-router-dom";
const useStyles = makeStyles(theme => ({
    clearPadding: {
        [theme.breakpoints.down("sm")]: {
            padding: 0
        }
    }
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#8b0000"
        }
    }
});
const App = () => {
    const classes = useStyles();
    return (
        <>
            <ThemeProvider theme={theme}>
                <Router>
                    <MyAppBar />
                    <Container maxWidth="lg" className={classes.clearPadding}>
                        <Carousel />
                        <PinoyRecipesMarketNav />
                    </Container>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
