import React, {Component} from 'react';
// import { useParams } from "react-router-dom";

import axios from 'axios';

class Old extends Component {

     state = {

        post:[],
        loading: true,
     }


      componentDidMount(){

        let id = 4;

        axios.get(`/api/post/show/${id}`)
        .then(res => {
            this.setState({post: res.data});
        })

      }

    render() {

        return (
            <div className="view-component container px-20 py-10">

                <p>post Old</p>

                {this.state.post.map( post =>
                 <tr id={post.id} key={post.id }>
                 <div className="card border-primary mb-3 flex items-center  shadow-lg bg-white  px-5 py-8">
                      <di>
                          <h4 className="card-title">{post.title}</h4>
                          <img src={post.image} className="post-image m-8" alt="BigCo Inc. logo"/>
                          
                      </di>
                  </div>
                 </tr>
             )}

            </div>
        );
    }
}

export default Old;
