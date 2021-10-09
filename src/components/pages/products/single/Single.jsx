import React, {useState, useEffect} from 'react';
import './Single.css';
import Swal from 'sweetalert2';
import { useParams} from "react-router-dom";

import axios from 'axios';
import {SET_PRODUCT} from "../../../../actions/index"
import {useSelector, useDispatch } from 'react-redux';

const Single = () => {

    let {slug} = useParams();
    const dispatch = useDispatch();
    const url = 'http://ecommerce.test';
    const single_data = useSelector((state) => state.PRODUCTSINGLE);


    const [loading, setLoading] = useState(true);

    const [product, setProduct] = useState([]);

    const addtocart = (id) =>{

        axios.post(`addtocart/${id}`).then(res =>{

            console.log(res)
            Swal.fire({
                icon: 'success',
                title: 'Product added'
              })

        })
    }



        useEffect(() => {

            axios.get(`product-single/${slug}`).then(res=>{
                if(res.status === 200)
                {
                    const product = Array(res.data)
                    setProduct(product);
                    setLoading(false);
                                     
                    dispatch(SET_PRODUCT(product));
                }
            });

        }, []);




        if(loading)
        {
            return <h4 className="container px-20 py-10">Loading  Data...</h4>
        }

    return (

        <div className="product-component container px-20 py-10">
            
            {product.map( product =>
                 <tr id={product.id} key={product.id }>
                    <div className="flex gap-10">
                        <di>
                            <img src={url+product.image} className="product-image m-8" alt="BigCo Inc. logo"/>

                        </di>

                        <div className="mt-10">
                        <h1 className="card-title">Title: {product.title}</h1>
                        <h4 className="card-title">Price: {product.price}</h4>
                        <h4 className="card-title">Category: {product.category.name}</h4>
                            <button onClick={()=>addtocart(product.id)} className="mt-5 w-full bg-indigo-700  text-center text-white py-2 px-12 rounded-lg">Add to cart</button>
                        </div>
                    </div>
                    <div>
                    <p className="text-black">{product.description}</p>
                    </div>
                 </tr>
             )}



         </div>
    );
}


export default Single;
