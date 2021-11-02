import React, { Component } from 'react'
import $, { map } from 'jquery';
import { Offcanvas, Button } from 'react-bootstrap';


export default class Profile extends Component {

    
    state = {
        show:false,
        profileData:{},
        closeBool:false
    }

    constructor(props) {
      super(props);
      // Don't call this.setState() here!
      let profile= {};
      localStorage.setItem('latestProfile',profile);

    
    }
  
        
     handleClose = ()=>
    {
        this.state.closeBool = true;
        this.setState({show:false});

    }
    addDefaultSrc(ev){
      ev.target.src = "/images/unknown.jpg"
    }

    addProfiletoLocal(selectedTeacherProfile)
    {
      
     


      let newprofile = JSON.stringify(selectedTeacherProfile);
      console.log('newwwwwwww');
      console.log(newprofile);
    
 
      localStorage.setItem('latestProfile',newprofile);
     
      
     

        console.log('retrive')
        console.log( JSON.parse(localStorage.getItem('latestProfile')));
   
  
    }

    render() {



      let selectedTeacherProfile = this.props.profileData;
      console.log("MOUNT" + selectedTeacherProfile.first_name);
      console.log("UNDEFINED " + (selectedTeacherProfile!=null));
      console.log("STATE CLOSE " + (this.state.closeBool));
      
       if(selectedTeacherProfile.first_name!=null && this.state.closeBool==false)
        { 
          this.state.show = true;
          this.addProfiletoLocal(selectedTeacherProfile);

        }
        else{
          this.state.closeBool=false;
          return  <Offcanvas show={false} onHide={this.handleClose} placement='end' className='canvaswidth rounded-start bg-canvas text-white py-3' scroll ={true} backdrop={false} >  </Offcanvas>;
        }

        this.state.closeBool = false;
        console.log("classes " + selectedTeacherProfile.classes);
       
        return (

            <>
           
            <Offcanvas show={this.state.show} onHide={this.handleClose} placement='end' className='canvaswidth rounded-start bg-canvas text-white py-3' scroll ={true} backdrop={false} >
        
              <Offcanvas.Header closeButton>
 
                <img  src={selectedTeacherProfile.avatar || "/images/unknown.jpg"}
                     className = "bg-white shadow  rounded-circle w-25 profileAvatar" 
                     alt="Profile Picture" 
                     />
                <div>
                <Offcanvas.Title className = " fs-1 fw-light pe-3" >{selectedTeacherProfile.first_name+" "} {selectedTeacherProfile.last_name}</Offcanvas.Title>
                <h2 className="fs-5 fw-lighter ps-5">{selectedTeacherProfile.email}</h2>
                </div>
              </Offcanvas.Header>
              <br/>
             
              <Offcanvas.Body>
              <h2 className="py-3 fs-3 fw-lighter">Classes</h2>
            
              {selectedTeacherProfile.classes != null ? 
              
              <ul className="fs-2 fw-lighter px-5 ">
              {(selectedTeacherProfile.classes).map((className) => (
               <li>{className.class}</li>
             ))}
             
             </ul> : null }
  
            
              </Offcanvas.Body>
            </Offcanvas>
          </>
        //     <div>
        //         {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button> */}
      
        //         <div className="offcanvas offcanvas-end shadow canvaswidth" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        //         <div className="offcanvas-header">
        //             <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Profile</h5>
        //             <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //         </div>
                
        //     </div>
        // </div>
        )
    }
}
