import PropTypes from "prop-types" 
//Typechecking With PropTypes
Button.propTypes = {
    text : PropTypes.string,
    onClick : PropTypes.func
}
export default function Button( {className , text , onClick} ){
    return (
        <button
            className = {className}
            onClick = {onClick}
        >
        {text}    
        </button>
    );
}



