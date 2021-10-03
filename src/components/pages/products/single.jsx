import React, {useState, useEffect} from 'react';

import { useParams} from "react-router-dom";

import axios from 'axios';

const Single = () => {

    let {slug} = useParams();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);

        useEffect(() => {

            axios.get(`product-single/${slug}`).then(res=>{
                if(res.status === 200)
                {
                    setProduct(res.data)
                    setLoading(false);
                }
            });

        }, []);


    if(loading)
    {
        return <h4 className="container px-20 py-10">Loading  Data...</h4>
    }

    return (

        <div className="product-component container px-20 py-10">


             {/* {product.map( product =>
                 <tr id={product.id} key={product.id }>
               
                 <div className="card border-primary mb-3 flex items-center px-5 py-8">
                      <di>
                          <h4 className="card-title">Title: {product.title}</h4>
                          <img src={product.image} className="product-image m-8" alt="BigCo Inc. logo"/>
                          
                          <p className="text-black">{product.description}</p>
                      </di>
                  </div>

                 </tr>
             )} */}

         </div>
    );
}


export default Single;
