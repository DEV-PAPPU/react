import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Profile extends Component {
    
      componentDidMount(){
    
      }

    render() {
          
        const name = this.props.user.name
        const email = this.props.user.email

        //Checking auth if not then redirect login page
        if(!localStorage.getItem('token')){
            return  <Redirect to={"/login"}/>
        }

        return (
            <div className="view-component container px-20 py-10">
                <p>Your Name  {name}</p>
                <p>Your Email  {email}</p>
            </div>
        );
    }
}

export default Profile;
