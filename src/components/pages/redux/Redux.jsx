// import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {incNumber,decIncreaseNumber, SET_PRODUCT} from "../../../actions/index"

const Redex = () => {

    const dispatch = useDispatch();
    const mystate = useSelector((state) => state.changeNumber);
    const single_data = useSelector((state) => state.PRODUCT_SINGLE);
    const test = "hello";
    return (

        <div className="product-component container px-20 py-10">
            
            <div className="parentdiv flex items-center gap-40">

                <div>
                    <h3>Simple Redux Number Change</h3>                          
                   <h3 className="py-3">{mystate}</h3>
                    <div className="flex gap-5">
                        <button onClick={() => dispatch(incNumber())} className="mt-10 bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-3 rounded-lg">incNumber</button>

                        <button onClick={() => dispatch(decIncreaseNumber())} className="mt-10 bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-3 rounded-lg">Decrease</button>
                    </div>
                </div>


                <div>
                   <h3>Working With Payload</h3>                          
                   <h3 className="py-3">{single_data}</h3>
                    <div className="flex gap-5">

                        <button onClick={() => dispatch(SET_PRODUCT())} className="mt-10 bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-3 rounded-lg">Sent Data</button>
                       
                    </div>
                </div>

            </div>

         </div>
    );
}

export default Redex;
