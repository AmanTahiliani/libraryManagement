import React from 'react'
import './Popup.css'
import TextField from "@material-ui/core/TextField";


function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}> close</button>
                {props.chilren}
                <h3>My popup</h3>
                <TextField id="name" label="Book Title" variant="outlined" />
                <TextField id="author" label="Author" variant="outlined" />
                <TextField id="publisher" label="Publisher" variant="outlined" />
            </div>
        </div>
    ) : "";
}

export default Popup