import React from 'react';
import Button from '../Button/button';
import './Lists.css';
const Lists = (props)=> {
    return (
    
        <div className="lists-wrapper">
          {props.lists.map((list, index)=> {
              return (
                  <div className="lists-wrapper-item"
                      key={index}>
                      {list}
                      <Button  label="remove"/>

                </div>
              )
          })}
        </div>
 
    )
}

export default Lists;