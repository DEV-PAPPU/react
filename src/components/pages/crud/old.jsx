import React, {Component} from 'react';
// import {Link} from "react-router-dom";

import axios from 'axios';

class CrudIndex extends Component {

  state = {

     category:[],
     loading: true,
  }

   componentDidMount(){

     axios.get(`category`)
     .then(res => {
         this.setState({category: res.data});
         this.setState({loading: false});
     })
     .catch(function (error) {
       console.log(error);
     })
   }

 render() {

    
     return (
        <div className="flex justify-center gap-10">
              

            <div className="py-6 px-8 mt-20 bg-white rounded shadow-xl w-5/12">
                <div className="content">
                <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {this.state.category.map((cat) => (
                  <tr key={cat.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={cat.id} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{cat.name}</div>
                          <div className="text-sm text-gray-500">{cat.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{cat.id}</div>
                      <div className="text-sm text-gray-500">{cat.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cat.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
                </div>
            </div>

            <div className="py-6 px-8 mt-20 bg-white rounded shadow-xl w-5/12">
                <form onSubmit={this.onSubmit}>

                
                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold">Email</label>
                        <input type="email" name="email" id="email" placeholder="email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        onChange={this.handleChange} 
                        value={this.state.email}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold">Password</label>
                        <input type="password" name="password" id="email" placeholder="password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        onChange={this.handleChange} 
                        value={this.state.password}
                        />
                    </div>

                    
                    <button type="submit" className="cursor-pointer py-2 px-4  mt-5 bg-indigo-500 text-white font-bold rounded">Login Now</button>
                </form>
            </div>
    </div>
     );
 }
}

export default CrudIndex;