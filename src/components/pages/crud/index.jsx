import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Swal from 'sweetalert2';

import axios from 'axios';

class CrudIndex extends Component {

    state = {

        category:[],
        loading: true,
        url: 'http://ecommerce.test',
        category_id:'',
        name:'',
        edit_category:false,
    }


    delete = (category) =>{

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {

          axios.delete(`category/${category.id}`).then(() => {
            this.loadCategory();
         });

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })


        
      // let index = this.state.category.indexOf(category);
      // this.state.category.splice(index, 1);
        
    }


    edit = (category) =>{
      this.setState({name: category.name, category_id: category.id, edit_category: true});
    }


    handleChange = (e) => {

      this.setState({
       [e.target.name]: e.target.value,
      })
   }


    update = (e) => {
        e.preventDefault();
        
        const id = this.state.category_id
       
        const data = new FormData()
        data.append('name', this.state.name)
      
        axios.post(`category/update/${id}`, data).then(response =>{

          Swal.fire({
            icon: 'success',
            title: 'Category Updated'
          })

          this.loadCategory();

         this.setState({name: '', edit_category:false});

         

        })
        .catch( e =>{
          console.log(e)
        })


      }

    addCategory = (e) => {
        e.preventDefault();
               
        const data = new FormData()
        data.append('name', this.state.name)
      
        axios.post(`category`, data).then(response =>{

         this.loadCategory();
         this.setState({name: ''});

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Category Added successfully'
        })

        })
        .catch( e =>{
          console.log(e)
        })

      }


    loadCategory = () =>{

        axios.get(`category`)
        .then(res => {
            this.setState({category: res.data});
            this.setState({loading: false});
        })
        .catch(function (error) {
            console.log(error);
        })
    }


   componentDidMount(){

     this.loadCategory();
    }

 render() {

      //Checking auth if not then redirect login page
      if(!localStorage.getItem('token')){
        return  <Redirect to={"/login"}/>
      }

    const edit_category = this.state.edit_category;
    let button;
           
        if(edit_category){
          button=(

            <button type="submit" onClick={this.update} className="cursor-pointer text-sm py-2 px-4  mt-5 bg-indigo-500 text-white font-bold rounded">Update</button>
          )
      }else(
        button=(
            <button type="submit" onClick={this.addCategory} className="cursor-pointer text-sm py-2 px-4  mt-5 bg-indigo-500 text-white font-bold rounded">Create</button>
          )
      )

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
                                  Slug
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Action
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
                                    <div className="text-sm font-medium text-gray-900">{cat.name}</div>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{cat.slug}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap flex gap-3">
                                    
                                    <span>
                                        <button onClick={() => this.edit(cat)} className="bg-indigo-700 text-center text-sm text-white py-1 px-2 rounded-lg">Edit</button>
                                    </span>
                                    <span>
                                        <button onClick={() => this.delete(cat)} className="bg-indigo-700 text-center text-sm text-white py-1 px-2 rounded-lg">Delete</button>
                                    </span>
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
                <form>

                
                    <div className="mb-6">
                        <label className="block text-gray-800 font-bold mb-2">Category Name</label>
                        <input type="text" name="name" id="email" placeholder="name" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                        onChange={this.handleChange} 
                        value={this.state.name}
                        />
                    </div>
                    
                    {button}
                    
                </form>
            </div>
    </div>
     );
 }
}

export default CrudIndex;