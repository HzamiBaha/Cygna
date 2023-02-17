import React from 'react'
import './loader.css'
import { useState, CSSProperties } from "react";
import PropagateLoader from 'react-spinners/PropagateLoader';

const override: CSSProperties = {
    borderRadius: " 5px",
    height: "40px",
    width: "40px",

};


const Loader = () => {
    return (
        <div className='loader-background'>
            <PropagateLoader color="#ADFF98" />
        </div>
    )
}

export default Loader