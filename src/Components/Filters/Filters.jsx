import React, { Component } from 'react'


import * as bootstrap from 'bootstrap'
import $ from 'jquery';
import { Dropdown } from 'semantic-ui-react'



export default class Filters extends Component {

    state = {
       makeOptions : [{text:''}],
       typeOptions : [{text:''}],
       currentOptions:[{text:''}],
       dropDownPlaceholder:'',
    }

    closeAll = (excludedTab) =>
    {
        console.log(excludedTab);

        if(excludedTab!='maketab')
        {
            var collapseElementList = document.getElementById('maketab')
            collapseElementList.addEventListener('shown.bs.collapse', function () {
                console.log("make tab show dis")
                var bsCollapse = new bootstrap.Collapse(collapseElementList, {
                 
                    hide: true
                  })

                  return bsCollapse;
    
              })

        }

        if(excludedTab!='typetab')
        {
            var collapseElementList = document.getElementById('typetab')
            collapseElementList.addEventListener('shown.bs.collapse', function () {
                console.log("type tab show dis")
                var bsCollapse = new bootstrap.Collapse(collapseElementList, {
                    hide: true
                  })

                  return bsCollapse;
    
              })

        }

      

    }

    clicked=(e,data)=>
    {
        console.log(data);
    }


    currentTab = (id) =>
    {

        
        var element = document.getElementById(`content`)
        var myCollapse = document.getElementById(`collapseconsole`)

        var isVisible = $('#collapseconsole').is( ":visible" );
       

        if(!isVisible)
        {
            var bsCollapse = new bootstrap.Collapse(myCollapse, {
                show: true
              })
        }


          if(id === 'typetab')
          {
          
            element.innerHTML = '<p>typetab</p>' 

          }
          else if(id=== 'maketab')
          {
  
            element.innerHTML = '<p>maketab</p>'          }
          else if(id=== 'yeartab')
          {
  
              element.innerHTML = '<p>yeartab</p>'
          }

     
    }

    

    render() {

        console.log("Current")
        console.log(this.state.currentOptions);
        console.log("CurrentF")
 

        return (

        <>
             
          <div className = "w-100  rounded-pill d-flex  flex-row  overflow-hidden filtersbox ">
          
                 <div className="text-center flex-fill  align-self-center text-white themecolor-bg pt-1">

                    <h5 className = "fw-normal">Filter by</h5>

                </div>

                <div className="text-center flex-fill align-self-center pt-1 themecolor_button ">

                    <h5 className="fw-normal "  onClick={()=>{this.currentTab('typetab')}} role="button"  >Type</h5>


                </div>
                
                <div className=" text-center flex-fill align-self-center pt-1 themecolor_button">

                <h5 className="fw-normal " onClick={()=>{this.currentTab('maketab')}} role="button"  >Make</h5>


                </div>
                
                <div className=" text-center flex-fill align-self-center pt-1 themecolor_button">

                <h5 className="fw-normal " onClick={()=>{this.currentTab('yeartab')}} role="button"  >Year</h5>

                </div> 
                
            </div>

        

                <div className="row pt-2">
                <div className="col-12-xs">
                        <div className="collapse multi-collapse shadow w-100 rounded rounded-3 " id="collapseconsole">
                        <div className="card card-body rounded rounded-3" id="content">
                                        <Dropdown
                            placeholder={this.state.dropDownPlaceholder}
                            fluid
                            search
                            selection
                            options={this.state.currentOptions}
                            onLabelClick = {this.clicked}
                            />
                        </div>
                        </div>

                    </div>

              
                    
                </div>  

         </>
              

        )
    }
}
