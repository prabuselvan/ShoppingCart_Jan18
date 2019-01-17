import React, { Component } from 'react';
import ShoppingForm from './components/ShoppingForm/ShoppingForm';
import ShoppingList from './components/ShoppingList/ShoppingList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items : ['Milk', 'Bread','Banana'],
      isError: false
    
    }
  }
  onAddedTask=(newVal)=>{
    if(!newVal) {
        this.setState( {
          isError: true
        })
    } else {
      const {items} = this.state;
      const isontheList= items.includes(newVal);

      if(isontheList) {
        this.setState( { 
          itemCheck: true,
          isError:false
        })
      } else {
        this.setState({
          items: [...this.state.items,newVal],
          isError: false,
          itemCheck: false
        })
      }
      
    }
  }

  onResetAll=()=>{
    this.setState( {
      items: []
    } )
  }

  delItem=(index)=> {
    const itemsCopy = this.state.items;
    itemsCopy.splice(index , 1);
    this.setState ( {
      items: itemsCopy
    }); 
  }

  render() {
    return (
      <div className="App">
         <ShoppingForm 
            onAddedItem={this.onAddedTask}
            isError={this.state.isError}
            onResetAll={this.onResetAll}
            itemCheck={this.state.itemCheck}
          />
          <ShoppingList 
            lists={this.state.items}
            deleteHandler={this.delItem}
            />
      </div>
    );
  }
}

export default App;
