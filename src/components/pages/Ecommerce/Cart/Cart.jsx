import React, {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import Fade from 'react-reveal/Fade';
import formatCurrency from './../../../Common/Filter/Currency';

const Cart = () =>{

    const [products, setProduct] = useState([]);
    
    
    useEffect(() => {
        
        loadCart();

    }, []);


    const loadCart = () =>{
        const cart_products =  JSON.parse(localStorage.getItem('cart'))
        setProduct(cart_products);
    }

    const subtotal = products.reduce((a, c) => a + c.price * c.quantity, 0)

    const removeItem = (item) =>{
        
        //filtering product & removed product from localStorage
        let cart_products = products.filter(product => product.product_id !== item.product_id );
        
        //Store products to localStorage
        localStorage.setItem('cart', JSON.stringify(cart_products));

        Swal.fire({
            icon: 'success',
            title: 'Product Removed'
        })
         
        //Load cart
        loadCart();
    }

    return(
        <>
        <Fade left>
          <div className="py-6  px-8 mt-20  lg:w-10/12 lg:mx-auto">
             <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="t-head-title">Name</th>
                                <th scope="col" className="t-head-title">Price </th>
                                <th scope="col" className="t-head-title">Quantity</th>
                                <th scope="col" className="t-head-title">Total</th>
                                <th scope="col" className="t-head-title">Action</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {products.map((product) => (
                                <tr key={product.price}>

                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                    </div>
                                  </td>

                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{formatCurrency(product.price)}</div>
                                  </td>

                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{product.quantity}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{formatCurrency(product.quantity * product.price)}</div>
                                  </td>

                                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                                  <button onClick={() => removeItem(product)} className="form-action-btn">Delete</button>
                                  </td>
                                
                                </tr>
                              ))}
                            </tbody>
                            <tfoot className="py-6">
                              <tr>
                                <td className="pl-5 text-gray-700 tex-lg font-semibold">Subtotal: {formatCurrency(subtotal)}</td>
                                <td colSpan="3"></td>
                                <td><button>Checkout</button></td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                </div>  
          <div className="mt-5 overflow-x-auto"></div>
          </div>
        </Fade>
        </>
    )
}

export default Cart;