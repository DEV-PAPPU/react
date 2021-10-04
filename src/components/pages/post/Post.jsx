import './Post.css';
import React, {Component} from 'react';
import {Link} from "react-router-dom";

import axios from 'axios';

class Post extends Component {

  state = {

     posts:[],
     loading: true,
     url:'http://react.test'
  }

   componentDidMount(){

     axios.get(`http://react.test/api/posts`)
     .then(res => {
         this.setState({posts: res.data});
         this.setState({loading: false});
     })
     .catch(function (error) {
       console.log(error);
     })
   }

 render() {

     if(this.state.loading){
         return (
             <div className="Post-component container px-20 py-10">
             <h2>Loading....</h2>
             </div>
         )
     }

     return (
         <div className="Products-component container mt-5 px-20 py-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-10">

             {this.state.posts.map( post =>

                 <div id={post.id} key={post.id }>

                      <div className="card flex items-center  mb-3 shadow-lg bg-white rounded-lg">
                          <div>

                          <img src={this.state.url+post.image} className="Products-image mb-3 rounded-sm" alt="BigCo Inc. logo"/>
                                                       
                            <div className="px-7 pb-8">
                            <h4 className="card-title ml-1 py-5">{post.title}</h4>
                                <Link to={`posts/${post.id}`} className="mt-5 w-full bg-indigo-700  text-center text-white py-2 px-12 rounded-lg">View Post</Link>
                            </div>
                           
                          </div>
                      </div>

                  </div>
             )}

         </div>
     );
 }
}

export default Post;