import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MemeGenerator from './pages/MemeGenerator';
import MemeGallery from './pages/MemeGallery';


/** Main app controller */
class App extends React.Component {

  render() {
    // gets the URL pathname 
    const pageName = String(window.location).split("/")[3];
    return (
      <Router>
        <div className="App">
        <NavBar page={pageName}/>
        <MemeGeneratorWrapper />
        <Route
          path="/gallery"
          render = {(routeProps) =>
            <MemeGallery {...routeProps} />
          } />
        </div>
      </Router>
    );
  }
}

class MemeGeneratorWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      memeArray: null,
      currentMeme: null,
      displayName: 'Loading...',
      isBold: false,
      memeText: []
    };
  }

  componentWillMount() {
    /* get meme data via get request */
    axios.get('https://api.imgflip.com/get_memes')
    .then(response => {
      if (response.data.success) {
        let memes = response.data.data.memes;
        this.setState((state) => ({
          memeArray: memes,
          currentMeme: memes[0],
          displayName: memes[0].name,
          isBold: true,
          memeText: new Array(memes[0].box_count)
        }));
      }
    });
  }

   /* called when meme template is changed */
  reselectMeme = (meme) => {
    this.setState((state) => ({
      currentMeme: meme,
      isBold: true,
      memeText: state.memeText.slice(0,meme.box_count)
    }));
  }

  /* called when text needs to be changed when hovering over different templates */
  changeText = (meme) => {
    this.setState((state,props) => ({
      displayName: meme.name,
      isBold: (meme === state.currentMeme)
    }));
  }

  /* called when text needs to be reset to display the name of the current meme */
  resetText = () => {
    this.setState((state,props) => ({
      displayName: state.currentMeme.name,
      isBold: true
    }));
  }

  /* called when caption text is added to the array */
  handleMemeText = (index,text) => {
    let newMemeTextArray = this.state.memeText;
    newMemeTextArray[index] = text;
    this.setState((state) => ({
      memeText: newMemeTextArray
    }));
  }

  render() {
    return (
      <Route
        exact={true}
        path='/'
        render = {(routeProps) =>
          <MemeGenerator
            {...routeProps}
            memeArray={this.state.memeArray}
            currentMeme={this.state.currentMeme}
            displayName={this.state.memeArray ? this.state.displayName : 'Loading...'}
            reselectMeme={this.reselectMeme}
            changeText={this.changeText}
            resetText={this.resetText}
            isBold={this.state.isBold}
            handleMemeText={this.handleMemeText}
            memeText={this.state.memeText}
            downloadMeme={this.downloadMeme}
          />
        }
      />
    );
  }
}

/** Component for navigational buttons */
const NavBar = (props) => {
  let links;
  if (props.page === ""){
    links =   
      <div id="links-section">
        <a className="link selected" id="acm-generator" href="/">Generator</a>
        <a className="link" id="acm-gallery" href="/gallery">Gallery</a>
      </div>;
  }
  else if (props.page === "gallery"){
    links =   
      <div id="links-section">
        <a className="link" id="acm-generator" href="/">Generator</a>
        <a className="link selected" id="acm-gallery" href="/gallery">Gallery</a>
      </div>;
    
  }
 
  return(
    <section id='nav-bar'>
      <h1 id="acm"> ACM UCSD Meme Gen </h1>
      {links}
    </section>
  ); 
}

export default App;
