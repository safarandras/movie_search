import { AppBar, Toolbar } from "@mui/material";
import React from "react";


function Navbar(){
    return(
        <AppBar position="sticky">
            <Toolbar>
                <h4>
                    <a href="/">Home</a>
                </h4>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar