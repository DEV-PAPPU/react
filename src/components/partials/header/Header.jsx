import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

import Nav from './nav';
import Home from "../../pages/home";
import Post from "../../pages/post/Post";
import Create from "../../pages/post/create/Create";
import Single from "./../../pages/post/single/single";
import Products from "../../pages/products/shop/Product";
import ProductSingle from "../../pages/products/single/Single";
import Login from "../../auth/login";
import axios from 'axios';
import Profile from "../../pages/profile/profile";
import Crud from "../../pages/crud/index";
import ReduxComponent from "../../pages/redux/Redux";
import Apishop from "../../pages/apishop/product";
import Apishopsingle from "../../pages/apishop/single";
import Test from "../../Test";
import Cart from './../../pages/Ecommerce/Cart/Cart'
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
      //  const token = res.data.access_token
       this.setUser(user);
      //  localStorage.removeItem('token');
      //  localStorage.setItem('token',token);
       })
    }

    setUser = (user) =>{
      this.setState({user:user})
    }

    render() {
      return (
       
        <Router>
           <Nav user={this.state.user} setUser={this.setUser}/>
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
                    <Route exact path='/crud' component={Crud}/>
                    <Route exact path='/redux' component={ReduxComponent}/>
                    <Route exact path='/fakestore' component={Apishop}/>
                    <Route exact path='/fakestore/:id' component={Apishopsingle}/>
                    <Route exact path='/cart' component={Cart}/>
                    <Route exact path='/test' component={Test}/>
                </Switch>
            </div>
     </Router>

      );
    }
  }

