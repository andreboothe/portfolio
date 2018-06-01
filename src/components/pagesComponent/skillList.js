
// Assets
import reactImg from '../../assets/images/react.png';
import gitImg from '../../assets/images/git.png';
import bootstrapImg from '../../assets/images/bootstrap.png';
import css3Img from '../../assets/images/css3.png';
import githubImg from '../../assets/images/github.png';
import gulpImg from '../../assets/images/gulp.png';
import herokuImg from '../../assets/images/heroku.png';
import html5Img from '../../assets/images/html5.png';
import javascriptImg from '../../assets/images/javascript.png';
import jqueryImg from '../../assets/images/jquery.png';
import materializeImg from '../../assets/images/materialize.png';
import nodejsImg from '../../assets/images/nodejs.png';
import sassImg from '../../assets/images/sass.png';

const skillList = [

    {
        name:"HTML",
        skills: [
            {
                name:"HTML5",
                imgSrc:html5Img
            },
            {
                name:"JSX",
                imgSrc: reactImg
            }
        ]
    },
    {
        name:"CSS",
        skills: [
            {
                name:"CSS3",
                imgSrc:css3Img
            },
            {
                name:"Bootstrap",
                imgSrc: bootstrapImg
            },
            {
                name:"Materialize",
                imgSrc: materializeImg
            },
            {
                name:"SASS",
                imgSrc: sassImg
            }
        ]
    },
    {
        name:"Javascript",
        skills: [
            {
                name:"ES6+",
                imgSrc:javascriptImg
            },
            {
                name:"JQuery",
                imgSrc: jqueryImg
            },
            {
                name:"React",
                imgSrc: reactImg
            },
            {
                name:"Node",
                imgSrc: nodejsImg
            }
        ]
    },
    {
        name:"Other",
        skills: [
            {
                name:"Git",
                imgSrc:gitImg
            },
            {
                name:"Github",
                imgSrc: githubImg
            },
            {
                name:"Gulp",
                imgSrc: gulpImg
            },
            {
                name:"Heroku",
                imgSrc: herokuImg
            }
        ]
    }


];

export default skillList;