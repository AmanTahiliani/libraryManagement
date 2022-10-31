import React from "react";
import '../components/NavBar.css'
import Button from "@material-ui/core/Button";
import Popup from './Popup'
import { useState } from 'react';


function NavBar() {

    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <div className="NavBar">
            <span className="nav-logo">LOGO</span>
            <div className="nav-items">
                <a href="/home">Home</a>
            </div>
            <Button onClick={() => {setButtonPopup(true)}} className="buttons" variant="contained" component="label">
                Upload Book
            </Button>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </Popup>
        </div>
    )
}

export default NavBar;

