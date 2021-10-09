import React, {Component} from 'react';
import {Link} from "react-router-dom";

import axios from 'axios';

class Products extends Component {

    state = {
     products:[],
     loading: true,
     url: 'https://fakestoreapi.com'
  }

   componentDidMount(){
    axios.get(`https://fakestoreapi.com/products`)
     .then(res => {
         this.setState({products: res.data});
         this.setState({loading: false});
     })
     .catch(function (error) {
       console.log(error);
     })
   }

 render() {

     if(this.state.loading){
         return (
             <div className="Products-component container px-20 py-10">
             <h2>Products.. Loading....</h2>
             </div>
         )
     }

     return (
         <div className="Products-component container mt-5 px-20 py-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 pt-10">

             {this.state.products.map( product =>
             
                <div id={product.id} key={product.id }>
                    <div className="card flex items-center  mb-3 shadow-lg bg-white rounded-lg">
                        <div>
                            <Link to={`product/${product.slug}`}>
                            <img src={product.image} className="Products-image mb-3 rounded-sm" alt={product.slug}/>
                            </Link>
                            
                            <div className="px-7 pb-8">
                            <h4 className="card-title ml-1 py-5">{product.title}</h4>
                                <Link to={`fakestore/${product.id}`} className="mt-5 w-full bg-indigo-700  text-center text-white py-2 px-12 rounded-lg">View Products</Link>
                            </div>
                        </div>
                    </div>
                </div>
             )}

         </div>
     );
 }
}

export default Products;