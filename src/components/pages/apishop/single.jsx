import React, {useState, useEffect} from 'react';
import { useParams} from "react-router-dom";
import axios from 'axios';
import ImageZoom from "react-image-zooom";

const Single = () => {

    let {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);

        useEffect(() => {

            axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>{
                if(res.status === 200)
                {
                    setProduct(res.data);
                    setLoading(false);
                }
            });

        }, [id]);

    if(loading)
    {
        return <h4 className="container px-20 py-10">Loading Student Data...</h4>
    }

    return (

        <div className="Post-component container px-20 py-10">

                 <div className="card border-primary mb-3 flex items-center px-5 py-8">
                      <div>
                          <h4 className="card-title">Title: {product.title}</h4>
                          {/* <img src={product.image} className="post-image m-8 px-60" alt="BigCo Inc. logo"/> */}
                          <ImageZoom src={product.image} alt="A image to apply the ImageZoom plugin" zoom="200"/>

                          <p className="text-black">{product.description}</p>
                      </div>
                  </div>

         </div>
    );
}


export default Single;
