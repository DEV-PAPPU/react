import React, {useState, useEffect} from 'react';

import { useParams} from "react-router-dom";

import axios from 'axios';

const Single = () => {

    let {id} = useParams();
    const url = 'http://react.test'
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);

        useEffect(() => {

            axios.get(`http://react.test/api/post/show/${id}`).then(res=>{
                if(res.status === 200)
                {
                    setPost(res.data)
                    setLoading(false);
                }
            });

        }, []);


    if(loading)
    {
        return <h4 className="container px-20 py-10">Loading Student Data...</h4>
    }

    return (

        <div className="Post-component container px-20 py-10">

             {post.map( post =>
                 <tr id={post.id} key={post.id }>
                 <div className="card border-primary mb-3 flex items-center px-5 py-8">
                      <di>
                          <h4 className="card-title">Title: {post.title}</h4>
                          <img src={url+post.image} className="post-image m-8 px-60" alt="BigCo Inc. logo"/>
                          
                          <p className="text-black">{post.description}</p>
                      </di>
                  </div>
                 </tr>
             )}

         </div>
    );
}


export default Single;
