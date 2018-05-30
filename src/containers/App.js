import React, { Component } from 'react';

// Components
import Navbar from '../components/Navbar';

// Includes
import '../assets/css/styles.min.css';
import M from 'materialize-css';


class App extends Component {

  componentDidMount(){
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
