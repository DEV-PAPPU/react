import React, {Component} from 'react';
import "./styles/tailwind.css";
import './App.css';
import Header from "./components/partials/header/Header";


//Important
import axios from 'axios';
axios.defaults.baseURL = 'http://ecommerce.test/api/';
// axios.defaults.baseURL = 'http://react.test/api/';

class App extends Component {

  render() {
    return (
      <Header />
    //   <Provider store={store}>
    //     <Header />
    //  </Provider>

    );
  }
}

export default App;


// function App() {
//   return (
//      <Header/>
//   );
// }