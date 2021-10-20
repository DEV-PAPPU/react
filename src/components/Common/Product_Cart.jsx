// import React from 'react'
import {Link} from "react-router-dom";

const Product_Cart = (props) =>{
    return(
        <>
        <div className="card  mb-3 shadow-lg bg-white rounded-lg">
            <div>
                <Link to={props.url}>
                <img src={props.image} className="products-image mx-auto mb-3 rounded-sm px-5 pt-5" alt={props.title}/>
                </Link>
                    
                <div className="mt-8 px-5 pb-8">
                        <Link to={props.url} className="block bg-indigo-700  text-center text-white py-2 px-12 rounded-lg">View Products</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product_Cart;