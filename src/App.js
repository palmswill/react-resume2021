import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    this.setState({resumeData:
      {
      "main": {
        "name": "William Liu",
        "occupation": "Front-End Developer",
        "description": " Currently a Sheridan College Student dedicated in improving user friendly design with profound buisness experience",
        "image": "profilepic.jpg",
        "bio": "2+ years React‑based web developer with experiences in business management and sales campaigns on e‑Commerce platforms with front‑end knowledge such as React library, HTML5, CSS3 and back‑end knowledge such as NodeJs, Express REST API, Amazon S3, Firebase and Google API. Currently studying at Sheridan College and looking for an internship focusing on modern web development.",
        "contactmessage": "",
        "email": "liuwilly4@gmail.com",
        "phone": "289-259-6430",
        "address": {
          "street": "",
          "city": "Toronto",
          "state": "Ontario",
          "zip": "L6H2T5"
        },
        "website": "http://www.timbakerdev.com",
        "resumedownload": "https://github.com/palmswill/react-resume2021/blob/gh-pages/William%20Liu%20Resume%202021v3.pdf",
        "social": [
          {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/williamliucs/",
            "className": "fa fa-linkedin"
          },
          {
            "name": "github",
            "url": "https://github.com/palmswill",
            "className": "fa fa-github"
          }
        ]
      },
      "resume": {
        "skillmessage": "Well-Rounded knowledge in both Front-End, Back-End technologies",
        "education": [
          {
            "school": "Sheridan College",
            "degree": "Software Development and Network Engineering - in progress",
            "graduated": "June 2022",
            "description": "Relevant Courses : Enterprise Java, Web Programming, Interactive User Design."
          }
        ],
        "work": [
          {
            "company": "Tribute Window Coverings",
            "title": "Smart Home Support management ",
            "years": "March 2019 - Present",
            "description": "Provided product support for mechanical products with online instruction videos and product manuals receiving wildly positive feedback and provided technical support including computer configuration and software problem ticket tracking for the company."
          },
          {
            "company": "Taiwan Intelligence Service Corps",
            "title": "Associate Architecture and System Designer (Contract)",
            "years": "April 2019 - April 2021",
            "description": "Participated in creating the ARTISC System, a C# based pollution flow simulation program using mySQL database and the US Aeromod simulation software. Main achievements included improved performance by redesigning database and created and modify user interface ,use cases and user flow design by communicating with the clients."
          },
          {
            "company": "Tribute Window Coverings",
            "title": "Supply Chain management ",
            "years": "November 2017- November 2019",
            "description": "Responsible for communication with the supplier ,improved quality and reduced price to further improve the cost performance of products, also generates and analyze sales across multiple product departments. Accurately predicting customer behaviour, utilize supply chain workflow to its maximum extent."
          },
          {
            "company": "Mini Micro",
            "title": "Warehouse Management /E-Commerce Assistant ",
            "years": "September 2017 - November 2017",
            "description": "Maintained e-Commerce websites including Amazon, eBay. Held sales campaign increasing online visibility and planning of marketing strategies."
          }
        ],
        "skills":  [
          {
            "name": "GoogleAPI",
            "description": " I have used Google APIs such as Google Map API to display target locations and use google sheet API to fetch and display some of the data from customer's google sheet, and uses Google auth for account authentication.",
            "image": "GoogleAPI.png"
          },
          {
            "name": "JavaScript",
            "description": " It is the main language I have been using as I have been mostly focused on Web development. This is by far my most familiar language in terms of algorithms and methods. ",
            "image": "Javascript.png"
          },
          {
            "name": "React Js",
            "description": "React is the main library I have been using through out my self-study. The idea of SPA and \" Plugging In \" allow me to simplify heavy loaded websites.I used the library to create the E-Commerce website and all my other projects as well.  ",
            "image": "react.jpg"
          },
          {
            "name": "Semantic UI",
            "description": "My to go css library for styling website. I prefer it because React component library is more complete, also the ability to be able to \"swap out\" component.  It is the framework I am most familiar with and can therefore design more quickly than with other.",
            "image": "SemanticUI.png"
          },
    
          {
            "name": "Node JS",
            "description": " Node JS is my server side language of choice. I mainly uses it with Express to create Rest APIs for my front-end web applications. So far I have created the APIs for me to connect to the ERP database for my E-Commerce website & Mongodb Atlas.",
            "image": "node.jpg"
          },
          {
            "name": "Amazon S3",
            "description": " My main cloud storage for large files such as images and files, it provides built in access policy and easy to use API for me to provide my website with images. It also allow non-tech personnel in my company to more easily manage what they want to put on their website.",
            "image": "Amazon S3.png"
          },
          {
            "name": "MongoDB Atlas",
            "description": "I have used many different database systems and am better educated and experienced with Relational Databases. However, for many applications, the ease of use of MongoDB better suits my needs and it is much more enjoyable to work with.",
            "image": "mongo.jpg"
          },
          {
            "name": "Heroku",
            "description": "I use Heroku as my hosting platform for most of my projects because so far they are all unpaid and their free tier is convenient. I also appreciate its integration with Github for such simple deployment.",
            "image": "heroku.jpg"
          }
        ]
      },
      "portfolio": {
        "projects": [
          {
            "title": "TWC E-Webwsite",
            "category": "A E-commerce website built for Tribute Window Covering cooperatign with their ERP database,Nodejs back end to create RESTAPI",
            "image": "twc-e-website.png",
            "url": "https://e-website-tcc.herokuapp.com/"
          },
          {
            "title": "Spacetagram",
            "category": "A responsive Space photo liker using semantic ui build with NASA picture of the day API ",
            "image": "spacetagram.png",
            "url": "https://nasapod2021.herokuapp.com/"
          },
          {
            "title": "The Shoppies",
            "category": "a movie nominator built with the movie api",
            "image": "shoppies.png",
            "url": "https://moviechallenge2021.herokuapp.com/"
          }
        ]
      },
      "testimonials": {
        "testimonials": [
          {
            "text": "We unreservedly recommend Mr.William for any position, ... His execllent performance in our company is a good indicator of how I would expect him perfrom in yours, ... He has been an extremely important contributor and creative thinker providing our company with new elements and positive influences. ",
            "user": "Tony Marzilli & Filipo Kadid ... President & Managing Director of Tribute Window Coverings"
          }
          
        ]
      }
    }})
    // $.ajax({
    //   url:'./resumeData.json',
    //   dataType:'json',
    //   cache: false,
    //   success: function(data){
    //     this.setState({resumeData: data});
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log(err);
    //     alert(err);
    //   }
    // });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;