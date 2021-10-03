import React, {Component} from 'react';
import {Link} from "react-router-dom";

import axios from 'axios';

class Products extends Component {

  state = {

     products:[],
     loading: true,
  }

   componentDidMount(){

     axios.get(`shop`)
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
             <h2>Products Loading....</h2>
             </div>
         )
     }

     return (
         <div className="Products-component container px-20 py-10 grid grid-cols-3 gap-6 pt-10">

             {this.state.products.map( product =>
             
                 <div id={product.id} key={product.id }>

                      <div className="card flex items-center  mb-3 shadow-lg bg-white  px-10 py-8">
                          <div>
                            <h4 className="card-title">{product.title}</h4>
                            <img src={product.image} className="Products-image m-8" alt="BigCo Inc. logo"/>
                            
                            <Link to={`product/${product.slug}`} className="mt-5 bg-indigo-700  text-white ml-4 py-2 px-3 rounded-lg">View Products</Link>
                          </div>
                      </div>

                  </div>
             )}

         </div>
     );
 }
}

export default Products;