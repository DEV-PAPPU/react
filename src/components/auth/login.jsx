import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {

     state = {
            email: '',
            password: '',
            errors:[],
         form:{
            email: '',
            password: '',
            errors:[],
         }
     }

     handleChange = (e) => {

        this.setState({
         [e.target.name]: e.target.value,
        })
     }

      onSubmit = (e) => {
        e.preventDefault();

        // const {form} = this.state.form

        const data = new FormData()
        data.append('email', this.state.email)
        data.append('password', this.state.password)
       
        axios.post(`auth/login`, data).then(response =>{
            
            const token = response.data.access_token;
            const user = response.data.user;
            localStorage.setItem('token', token);
          
            this.props.setUser(user);
            
            console.log(user);

        })
        .catch( e =>{
          console.log(e)
        })

        }

        componentDidMount(){
            
            // if(this.props.setUser){

            //     console.log('yess')

            // }
        }


    render() {

        return (

            <div className="flex justify-center">
              

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
                            <label className="block text-gray-800 font-bold">Email</label>
                            <input type="password" name="password" id="email" placeholder="password" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                            onChange={this.handleChange} 
                            value={this.state.password}
                            />
                        </div>

                        
                        <button type="submit" className="cursor-pointer py-2 px-4  mt-5 bg-indigo-500 text-white font-bold rounded">Submit</button>
                    </form>
                </div>
        </div>

        );
    }
}

export default Login;

