import PropTypes from "prop-types"
import React from "react"
//Typechecking With PropTypes
Input.propTypes = {
    type : PropTypes.string,
}
export function Input( { className,  label , type , name , value , onChange } ){
    return (
        <>
            <label> {label} </label>            
            <input 
                className={className}
                type = {type}
                name={name}
                value={value}
                onChange={onChange}
                >
            </input>
        </>
    )
}
