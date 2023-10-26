import React from "react"
import './button.scss'

const Button = ({value, handleClick}) =>{
    return(
        <button className="button"  onClick={() => handleClick(value)}>{value}</button>
    )
}



export default Button