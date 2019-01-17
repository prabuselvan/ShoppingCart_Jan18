import React from 'react';
import './input.css';

class Input extends React.Component {

    constructor(props) {
        super(props);
    }

    onChange=(e)=> {
        const {value}= e.target;
        // console.log(value);
        this.props.onChangeHandler(value);
        
    }
    render() {
        return (
            <div className="input-wrapper">
                <input 
                onChange={this.onChange}
                placeholder={this.props.placeholder}/>
            </div>
        )
    }
}

export default Input;