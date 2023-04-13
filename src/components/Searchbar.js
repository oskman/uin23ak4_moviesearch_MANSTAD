import React from "react";
import TextField from "@mui/material/TextField";

const Searchbar = ({handle}) => {
    return (
        <div className="search">
            <TextField id="inputField" onChange={handle} label="Searchbar"/>
        </div>
    );
};

export default Searchbar