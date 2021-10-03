import './Post.css';
import React, {Component} from 'react';
import {Link} from "react-router-dom";

import axios from 'axios';

class Post extends Component {

  state = {

     posts:[],
     loading: true,
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
         <div className="Post-component container px-20 py-10 grid grid-cols-3 gap-6">

             {this.state.posts.map( post =>
             
                 <div id={post.id} key={post.id }>

                      <div className="card flex items-center  mb-3 shadow-lg bg-white  px-10 py-8">
                          <div>
                            <h4 className="card-title">{post.title}</h4>
                            <img src={post.image} className="post-image m-8" alt="BigCo Inc. logo"/>
                            
                            <Link to={`posts/${post.id}`} className="mt-5 bg-indigo-700  text-white ml-4 py-2 px-3 rounded-lg">View Post</Link>
                          </div>
                      </div>

                  </div>
             )}

         </div>
     );
 }
}

export default Post;