import React from 'react';
import Avatar from '../Image/image';
import shoppingIcon from '../../images/shoppingCart.png';
import Heading from '../Heading/heading';
import Input from '../Input/Input';
import Button from '../Button/button';
import './index.css';
class TaskForm extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            itemValue: '',

        }
    }

    onItemChange=(newItem)=>{
        console.log('new Item is ', newItem);
        this.setState( {
          itemValue: newItem
        })
      }
    
      onAddItem=()=>{
        const {itemValue}= this.state;
        // alert(itemValue);
        this.props.onAddedItem(itemValue);
      }

      resetMe=()=>{
          this.setState( {
               itemValue : ''
          },()=> {
              console.log('state is', this.state.itemValue);
              
          });
      }

      resetAll= ()=> {
          this.setState ( {
              itemValue: ''
          }, ()=> {
              this.props.onResetAll();
          })
      }
        render() {
            return(
                <div>

                         <Avatar src={shoppingIcon} alt='shoppingCart'/>
                        <Heading name="Shopping Lists"/>

                        <div className="shoppingForm-wrapper">
                                <Input
                                    onChangeHandler={this.onItemChange}
                                    placeholder="Enter the Product Name"
                                    value={this.state.itemValue}
                                    isError={this.props.isError}
                                    />
                                <Button 
                                    label="Add"
                                    onClick={this.onAddItem}
                                    theme="green"/>
                                
                                <Button
                                    label="Reset"
                                    onClick={this.resetMe}
                                    theme="orange"/>

                                <Button
                                    label="Reset All"
                                    onClick={this.resetAll}
                                    theme="orange"/>
                        </div>
                        
                        {this.props.isError && <div className='error-message'> Please Enter the Items  </div>}

                        {this.props.itemCheck && <div className='items-in-the-List'> Item is already present in the list  </div>}

                                </div>
            )
        }
}

export default TaskForm;