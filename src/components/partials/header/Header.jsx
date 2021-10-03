import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import Nav from './nav';
import Home from "../../pages/home";
import Post from "../../pages/post/Post";
import Create from "../../pages/post/create/Create";
import Single from "./../../pages/post/single/single";
import Products from "../../pages/products/product";
import ProductSingle from "../../pages/products/single";
import Login from "../../auth/login";
import axios from 'axios';
import Profile from "../../pages/profile/profile";
export default class header extends Component {

    state={
      user:{}
    }

    componentDidMount(){

       axios.get(`auth/user`,{
        headers:{
            authorization: 'Bearer' + localStorage.getItem('token')
        }
    }).then(res =>{
      
       const user = res.data
       this.setUser(user)

       })

    }

    setUser = (user) =>{
      this.setState({user:user})
    }

    render() {
      return (
       
        <Router>
           <Nav user={this.state.user}/>
            <div>
                <Switch>
                    <Route exact path='/' component={ ()=><Home user={this.state.user}/> }/>
                    <Route exact path='/posts' component={Post} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/product/:slug' component={ProductSingle} />
                    <Route exact path='/posts/:id' component={Single} />
                    <Route exact path='/create' component={Create} />
                    <Route exact path='/login' component={()=><Login setUser={this.setUser}/>}/>
                    <Route exact path='/profile' component={()=><Profile user={this.state.user}/>}/>
                </Switch>
            </div>
     </Router>

      );
    }
  }

