import React, { Component } from 'react';

// Components
import Nav from '../components/navComponents/Nav';
import LandingPage from '../components/pagesComponent/LandingPage';
import AboutPage from '../components/pagesComponent/AboutPage';
import EducationPage from '../components/pagesComponent/EducationPage';
import ContactPage from '../components/pagesComponent/ContactPage';
import SkillPage from '../components/pagesComponent/SkillPage';
import CertificatePage from '../components/pagesComponent/CertificatePage';
import ProjectPage from '../components/pagesComponent/ProjectPage';

// Includes
import '../assets/css/styles.min.css';
import M from 'materialize-css';
import skillList from '../components/data/skillList';
import projectNameList from '../components/data/projectNameList';
import projectImages from '../components/data/projectImages';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projectNames: projectNameList,
      projects: [],
      loadedProjects: false
    }
  }

  componentDidMount(){
    const githubApi = 'https://api.github.com/users/andreboothe/repos?per_page=100';
    
    this.setProjects(githubApi)
      .then(() => {
        this.navigationInit();
        this.scrollSpyInit();
        
      }
    )
      
  }

  getDisplayProjects = (projects) => {
    let result = [];

    projects.forEach(project => {
        const displayProject = this.state.projectNames.includes(project.name);
        if(displayProject){
          result.push(project);
        }
    });
    return result;
  } 

  setProjects = (apiUrl) => {
    
    return new Promise( ( resolve, reject ) => {
      fetch(apiUrl)
      .then(response => response.json())
      .then(myprojects => {
        const displayProjects = this.getDisplayProjects(myprojects);
        this.setState({
          projects: displayProjects,
          loadedProjects: true
        });
      })
      .then(resolve('Projects Obtained.'))
      .catch(reject(`We could not get your projects from ${apiUrl}.` ));

    });
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
    const {loadedProjects, projects} = this.state;

    
    //  return (!loadedProjects)?
    //   <div className="loadingAnimation"></div>:
      return (
        <div className="App">
          
          <Nav />
          <LandingPage />
          <AboutPage />
          <SkillPage 
            skillList= {skillList}
          />
          <ProjectPage 
            projects = {projects}
            projectImages = {projectImages}
          />
          <EducationPage />
          <CertificatePage />
          <ContactPage />
        </div>
      );
  }
}

export default App;
