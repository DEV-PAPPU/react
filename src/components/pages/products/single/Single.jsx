import React, {useState, useEffect} from 'react';
import './Single.css';
import { useParams} from "react-router-dom";
import axios from 'axios';
// import {SET_PRODUCT} from "../../../../actions/index"
import {ADD_TO_CART} from "../../../../actions/CartAction"
import {useDispatch } from 'react-redux';
import Fade from 'react-reveal/Zoom';

import ImageZoom from "react-image-zooom";

const Single = () => {

    let {slug} = useParams();
    const dispatch = useDispatch();
    const url = 'http://ecommerce.test';

    const [loading, setLoading] = useState(true);

    const [product, setProduct] = useState([]);

        useEffect(() => {

            axios.get(`product-single/${slug}`).then(res=>{
                if(res.status === 200)
                {
                    setProduct(res.data);
                    setLoading(false);
                }
            });

        }, [slug]);


        if(loading)
        {
            return <h4 className="container px-20 py-10">Loading  Data...</h4>
        }

    return (
        <Fade bottom>
        <div className="product-component container px-20 py-10">

           <div className="flex gap-10">
                <div className="">
                    {/* <img src={url+product.image} className="product-image m-8" alt="BigCo Inc. logo"/> */}
                   
                    <ImageZoom src={url+product.image} alt="A image to apply the ImageZoom plugin" zoom="200"/>

                </div>

                <div className="lg:mt-10">
                        <h1 className="card-title text-2xl py-5">{product.title}</h1>

                        <h4 className="price text-2xl">Price: {product.price}</h4>

                        <h4 className="price text-lg mt-5">Stock: Available</h4>
                        
                        <h4 className="text-lg py-5">Category: {product.category.name}</h4>
                        
                        <button onClick={() => dispatch(ADD_TO_CART(product))} className="mt-5 w-full bg-indigo-700  text-center text-white py-2 px-12 rounded-lg">Add to cart</button>
                 </div>
            </div>

            <div className="content text-black bg-white p-6">
                <p className="description" dangerouslySetInnerHTML={{__html: product.description}}/>
            </div>

         </div>
         </Fade>
    );
}


export default Single;
