import React from 'react';
import propTypes from 'prop-types';
import './button.css';  
const Button = (props)=> {
    return (
        <div className="button-wrapper">
            <button className={props.theme}
                    onClick={props.onClick}>{props.label}</button>
  </div>
    )
}


Button.defaultProps = {
    label : 'Add',
    onClick: ()=>{},
    theme: 'green'
}

Button.propTypes = {
    label : propTypes.string,
    onClick: propTypes.func,
    theme: propTypes.oneOf(['green','red','orange'])
}

export default Button;