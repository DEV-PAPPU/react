import React, {Component} from 'react';
import {Link} from "react-router-dom";
// import Logo from "../../../assets/logo.png";
export default class nav extends Component {

   
    render() {

        let profile;
        const auth = localStorage.getItem('token')

        if(auth){
            profile=(

                <div>
                    <Link className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg" to={"/profile"}>
                    Profile</Link>

                    <Link className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg" to={"/profile"}>
                    Logout</Link>
                </div>

            )
        }else(
            profile=(
                <Link  className="bg-indigo-700 hover:bg-indigo-500 text-white ml-4 py-2 px-3 rounded-lg" to={"/login"}>
                    Login
                </Link>
            )
        )

      return (
        <div className="header-nav">

            <header className="text-gray-100 bg-gray-800 body-font shadow w-full">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                   
                    <div className="ml-5 lg:ml-0">
                      
                        <Link className="text-4xl cursor-pointer" to={"/"}>LOGO</Link>
                        
                        {/* <img src={require('../../../assets/logo.png')} alt=""/> */}
                        {/* <img src={Logo} alt="" className="site-logo"/> */}
                    </div>

                    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                        <Link
                            className="mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600" to={"/"}>Home</Link>
                    
                        <Link
                            className="mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600" to={"/posts"}>Posts</Link>
                       
                        <Link
                            className="mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600" to={"/products"}>Products</Link>
                    
                        <Link className="mr-5 cursor-pointer border-b border-transparent hover:border-indigo-600" to={"/create"}>
                            Create</Link>

                    </nav>
                
                    
                    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 sm:pt-3">
                      {profile}
                    </div>
                </div>
          </header>

        </div>
      );
    }
  }

