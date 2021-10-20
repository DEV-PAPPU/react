import React, {Component} from 'react';
import axios from 'axios';

class create extends Component {

     state = {
         title: '',
         description: '',
         category_id: '',
         image: '',
         status: '',
         category:[],

         form:{
            title: '',
            description: '',
            category_id: '',
            image: '',
            status: '',
            category:[],
         }
     }

     handleChange = (e) => {

        this.setState({
         [e.target.name]: e.target.value,
        })
     }

      onSubmit = (e) => {
        e.preventDefault();

        const {form} = this.state.form;

        console.log(form);

        const img = document.getElementById('image').files[0];

        const data = new FormData()
        data.append('title', this.state.title)
        data.append('category_id', this.state.category_id)
        data.append('status', this.state.status)
        data.append('image', img)
        data.append('description', this.state.description)

        axios.post(`post/store`, data).then(res =>{
            console.log(res)
        })
        .catch( e =>{
          console.log(e)
        })

        }

        componentDidMount(){
            axios.get(`http://blogs.test/api/category`).then(res =>{

                console.log(res)
                this.setState({category: res.data});
            })
            .catch( e =>{
              console.log(e)
            })
        }



    render() {
        return (

            <div className="flex justify-center">
                <div className="py-6 px-8 mt-20 bg-white rounded shadow-xl w-5/12">
                    <form onSubmit={this.onSubmit}>

                        <div className="mb-6">
                            <label className="block text-gray-800 font-bold">Title</label>
                            <input type="text" name="title" id="name" placeholder="title" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                            onChange={this.handleChange} 
                            value={this.state.title}
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label className="block text-gray-800 font-bold mb-3">Category</label>
                           
                            <select  onChange={this.handleChange} name="category_id" value={this.state.category_id} className="" id="category_id">

                            <option value="" selected>Select category</option>

                                {this.state.category.map( cat =>
                                <option id={cat.id} key={cat.id} value={cat.id} selected>{cat.name}</option>
                                )}

                            </select>
                        </div>


                        <div className="form-group mb-3">
                            <label className="text-gray-800 font-bold mr-4 mb-3">Status</label>
                           
                            <select onChange={this.handleChange} value={this.state.status} name="status" id="status" class="w-full p-2 border border-gray-300 text-sm">
                            <option value="0" selected>Publish</option>
                            <option value="1" selected>Draft</option>
                            </select>
                        </div>

                        <div className="form-group my-8">
                           <label className="text-gray-800 font-bold mr-4 m-3">Image</label>
                            <input type="file" name="image" id="image"  className="form-control"
                            value={this.state.image}
                            onChange={this.handleChange}
                            />
                        </div>

                        <div>
                            <div className="">
                                <label className="block text-gray-800 font-bold mb-4">Description:</label>
                            
                            <textarea className="description w-full bg-gray-100 sec p-3 h-30 border border-gray-300 outline-none" spellcheck="false" placeholder="description" 
                            onChange={this.handleChange} value={this.state.description} name="description"
                            ></textarea>
                            </div>
                        
                        </div>
                        
                        <button type="submit" className="cursor-pointer py-2 px-4  mt-10 bg-indigo-500 text-white font-bold rounded">Submit</button>
                    </form>
                </div>
        </div>

        );
    }
}

export default create;

