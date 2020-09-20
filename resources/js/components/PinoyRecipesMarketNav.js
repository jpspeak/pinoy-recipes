import React from "react";

import { NavLink } from "react-router-dom";

import { Box, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    navContainer: {
        backgroundColor: "#eee",
        color: theme.palette.primary.main
    },
    active: {
        color: "#fff !important",
        backgroundColor: theme.palette.primary.main
    }
}));
const PinoyRecipesMarketNav = () => {
    const classes = useStyles();
    return (
        <>
            <Box display="flex" className={classes.navContainer}>
                <Box flexGrow={1}>
                    <NavLink
                        to="/"
                        exact
                        className="d-block text-decoration-none text-reset"
                        activeClassName={classes.active}
                    >
                        <ButtonBase className="w-100">
                            <Typography
                                variant="h6"
                                className="py-2 text-center"
                            >
                                Pinoy Recipes
                            </Typography>
                        </ButtonBase>
                    </NavLink>
                </Box>

                <Box flexGrow={1}>
                    <NavLink
                        to="/market"
                        exact
                        className="d-block text-decoration-none text-reset"
                        activeClassName={classes.active}
                    >
                        <ButtonBase className="w-100">
                            <Typography
                                variant="h6"
                                className="py-2 text-center"
                            >
                                Market
                            </Typography>
                        </ButtonBase>
                    </NavLink>
                </Box>
            </Box>
        </>
    );
};

export default PinoyRecipesMarketNav;
