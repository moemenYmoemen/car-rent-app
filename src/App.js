import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom'
import Mainpanel from './Components/Mainpanel/Mainpanel';
import { Route, Redirect, Switch } from 'react-router';
import $ from 'jquery';
import SortedSet from 'js-sorted-set'
import 'semantic-ui-css/semantic.min.css'



export default class App extends Component {

  state = {
    namesAlphabet:[],
    maintitle:'Viewed Profiles',
    teacherslist_primary:[],
    teacherslist_filtered:[],
    selectedProfile:{},
    profileVisible:false,
    vehicleTypes:{},
    vehicleMakes:{}

  }

   getData =()=>
  {

    var vehicleTypes={};
    var vehicleMakes={};
    
    $.ajax({
      url: "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleVariableValuesList/Vehicle%20Type?format=json",
      type: "GET",
      dataType: "json",
      success: function(result)
      {
        
        vehicleTypes = Object.assign({}, result);
        this.setState({vehicleTypes});
        
      }.bind(this),
      error: function(xhr, ajaxOptions, thrownError)
      {
        console.log(xhr.status);
        console.log(thrownError);
      }
    });

    $.ajax({
      url: "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json",
      type: "GET",
      dataType: "json",
      success: function(result)
      {
        
        vehicleMakes = Object.assign({}, result);
        this.setState({vehicleMakes});
        
       
      }.bind(this),
      error: function(xhr, ajaxOptions, thrownError)
      {
        console.log(xhr.status);
        console.log(thrownError);
      }
    });


 
  }


  componentDidMount()
  {
    this.getData();
  }

  searchTerm = (term) =>
  {
    this.setState({maintitle:term})
    this.getTeachers(term);
   
  }

  getProfileId = (id)=>
  {

    let profile =JSON.parse(JSON.stringify(this.getTeachersbyId(id)));
    console.log("Prof" + profile);
    this.setState({selectedProfile:profile},function()
    {
      this.state.selectedProfile={};

    });
  }



  getTeachersbyId=(id)=>
  {
    let teachersList = this.state.teacherslist_primary;

    for(let i =0; i< teachersList.length; i++)
    {
      if(teachersList[i].id===id)
      {
        return teachersList[i];
      }
    }
    return NaN;
  }

  getTeachers=(name)=>
  {

    let teachersList = this.state.teacherslist_primary;
    let filteredlist =[];
    let filteredlist_2ndpriority=[];
    let filteredlist_3rdpriority=[];
    let filteredlist_4thpriority=[];
    let numberofspaces = (name.match(/ /g) || []).length;
    
    
    // Case 1 : empty input
    if(name.length==0)
    {
     
        this.setState({teacherslist_filtered:[]});
       
    }

    // Case 2 : Single letter
    else if(name.length==1)
    {

     
      for(let i =0; i<teachersList.length;i++)
      {
        
        if(teachersList[i].first_name[0].toUpperCase()  === name.toUpperCase())
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist.push(newTeacher);
          
        }
      }

      this.setState({teacherslist_filtered:filteredlist});
    }
    // Case 3 : Single Name
    else if(numberofspaces==0)
    {
      
      for(let i =0; i<teachersList.length;i++)
      {
      
        if(teachersList[i].first_name.toUpperCase().startsWith(name.toUpperCase()))
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist.push(newTeacher);
          
        }

        else if(teachersList[i].first_name.toUpperCase().includes(name.toUpperCase()))
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist_2ndpriority.push(newTeacher);
          
        }
        else if(teachersList[i].last_name.toUpperCase().startsWith(name.toUpperCase()))
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist_3rdpriority.push(newTeacher);
        
  
        }
        else if(teachersList[i].last_name.toUpperCase().includes(name.toUpperCase()))
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist_4thpriority.push(newTeacher);
  
        }
        

      }

   
      let concArry = ( (filteredlist.concat(filteredlist_2ndpriority)) .concat(filteredlist_3rdpriority) ).concat(filteredlist_4thpriority)
      this.setState({teacherslist_filtered:concArry});

    }
    // Case 4 : First Name Last Name
    else if(numberofspaces>0)
    {
     
      var fullName = name.split(' '),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];

      for(let i =0; i<teachersList.length;i++)
      {
      
        if(teachersList[i].first_name.toUpperCase() == (firstName.toUpperCase()) && teachersList[i].last_name.toUpperCase() == (lastName.toUpperCase()))
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist.push(newTeacher);
          break;
        }
        else
        {
           if(teachersList[i].first_name.toUpperCase().startsWith(firstName.toUpperCase()))
          {
            let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
            filteredlist.push(newTeacher);
            
          }
          else if(teachersList[i].first_name.toUpperCase().includes(firstName.toUpperCase()))
          {
            let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
            filteredlist_2ndpriority.push(newTeacher);
          }
          else if(teachersList[i].last_name.toUpperCase().startsWith(lastName.toUpperCase()))
          {
            let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
            filteredlist_3rdpriority.push(newTeacher);
    
          }
          else if(teachersList[i].last_name.toUpperCase().includes(lastName.toUpperCase()))
          {
            let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
            filteredlist_4thpriority.push(newTeacher);
    
          }
      }

      }
      
      let concArry = ( (filteredlist.concat(filteredlist_2ndpriority)) .concat(filteredlist_3rdpriority) ).concat(filteredlist_4thpriority)
      this.setState({teacherslist_filtered:concArry});

    }

    // Case 5 : More than 2 names
    else if(numberofspaces>1)
    { 
      console.log('more than 2')

    }
  }

  

  
  render() {
    
   

    return (
      <React.Fragment>
       
      <Navbar makes = {this.state.vehicleMakes} types ={this.state.vehicleTypes}/>
     
      <Mainpanel/>
      <Footer/> 
        

  
      </React.Fragment>
    )
  }
}
