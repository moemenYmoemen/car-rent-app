import React, { Component } from 'react'

export default class Searchbox extends Component {

    
    handleKeyPress= (event)=> {
        if(event.charCode==13){
            this.props.parentCallback(event.target.value)
        
        } 
      }

      
    render() {
        
        return (
            <div className='w-75 '>
                <input 
                type="text" 
                className="form-control inputField fs-5 text-secondary" 
                placeholder='Search by Make, Type, Year...etc'
                onKeyPress={this.handleKeyPress}
                ></input> 
           
            </div>
        )
    }
}
