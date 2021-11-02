import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DropDownSearch from '../DropDownSearch/DropDownSearch';
import Filters from '../Filters/Filters';
import Searchbox from '../Searchbox/Searchbox'
import Select,  { createFilter } from "react-select";
import { FixedSizeList as List } from "react-window";

import WindowedSelect from "react-windowed-select";






export default class Navbar extends Component {

    termCallback = (term) =>
    {
        // let searchTermCallback = this.props.searchTerm;
        // searchTermCallback(term);
   

    }

 

    render() {

        const options = [];
for (let i = 0; i < 10000; i = i + 1) {
  options.push({ value: i, label: `Option ${i}` });
}
 

    
        return (

            <React.Fragment>

            
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark headerPanel position-relative siteWidth shadow  ">
                    

                    <div className="mx-auto">
                          <img src="./images/logo.png" alt="" className="headerLogo " />
                    </div>
         
                   

                   </nav>
                   <div className="w-25">
                   {/* <WindowedSelect options={options} />; */}
                   </div>

                   <div className=" w-25  position-absolute filters ">
                   <Filters makes={this.props.makes} types = {this.props.types}/>
                    </div>
                    
                   <div className="w-50 container  position-absolute searchbox pb-4">
                    <Searchbox parentCallback = {this.termCallback} />
                
            
                   </div>

                 
                
                
            </div>

            </React.Fragment>
        )
    }
}
