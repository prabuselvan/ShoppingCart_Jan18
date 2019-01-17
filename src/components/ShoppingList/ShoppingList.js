import React from 'react';
import Button from '../Button/button';
import './index.css';


class ShoppingList extends React.Component{ 
  
    constructor(props) {
        super(props);
    }

    onDelete =(delItem)=> {
        // alert(delItem); 
        this.props.deleteHandler(delItem);
    }

    render() {
        const {props} = this;
        return(
            <div className="shoppinglists-wrapper">
                    {props.lists.map((item, index)=> {
                        return (
                            <div className="shoppinglists-wrapper-item"
                                 key={index}>
                                    {item} <Button label="Remove" theme="red" onClick={this.onDelete.bind(this, index)}/>
                            </div>
                        )
                    })}

    
            </div>
        )
        
    }
}



    


export default ShoppingList;