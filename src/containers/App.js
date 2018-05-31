import React, { Component } from 'react';

// Components
import Nav from '../components/navComponents/Nav';
import Pages from '../components/pagesComponent/Pages';

// Includes
import '../assets/css/styles.min.css';
import M from 'materialize-css';


class App extends Component {

  componentDidMount(){
    this.navigationInit();
    this.scrollSpyInit();
  }

  navigationInit = () => {
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
  }

  scrollSpyInit = () => {
    const scrollSpy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollSpy, {});
  }

  render() {
    return (
      <div className="App ">
        <Nav />
        <Pages />
      </div>
    );
  }
}

export default App;
