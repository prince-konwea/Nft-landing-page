import React from 'react';
import "./button.css"

const Button = (props) => {
   const {btnType, btnText, btnOnclick, customClass } = props;

   return <div className={`${btnType==="PRIMARY" ? 
   `button primary-button ${customClass}` : 
   `button secondary-button ${customClass}`}`}
   onClick={btnOnclick}
   >
    {btnText}</div>
}

export default Button;