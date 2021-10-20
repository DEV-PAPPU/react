import React, {useState, useEffect} from 'react';
import ProductCart from './Common/Product_Cart';
import axios from 'axios';

const Test = () =>{

    const [loading, setLoading] = useState(true);
    const [products, setProduct] = useState([]);

    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products`).then(res=>{
            if(res.status === 200)
            {
                setProduct(res.data);
                setLoading(false);
            }
        });

    }, []);

    if(loading)
    {
        return <h4 className="container px-20 py-10">Loading  Data...</h4>
    }
    
    return(
        <>
        <div className="mt-5 lg:px-20 px-10 py-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {products.map( product =>
                 <div id={product.id} key={product.id}>
                    <ProductCart title={product.title} image={product.image} url={`fakestore/${product.id}`}/>
                 </div>
             )}
        </div>
        </>
    )
}
export default Test;