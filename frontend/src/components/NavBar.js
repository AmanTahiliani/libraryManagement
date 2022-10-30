import React from "react";
import '../components/NavBar.css'
import Button from "@material-ui/core/Button";


function NavBar() {
    return(
        <div className="NavBar">
            <span className="nav-logo">LOGO</span>
            <div className="nav-items">
                <a href="/home">Home</a>
            </div>
            <Button className="buttons" variant="contained" component="label">
                Upload Book
                <input hidden accept="image/*" multiple type="file" />
            </Button>


        </div>
    )
}

export default NavBar;

