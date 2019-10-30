import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import MemeGenerator from './MemeGenerator';

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

export default MemeGeneratorWrapper;