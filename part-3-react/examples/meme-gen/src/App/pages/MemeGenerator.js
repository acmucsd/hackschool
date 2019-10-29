import React from 'react';
import axios from 'axios';
require('../style/generator.css')

/** Component for selecting meme template */
class TemplateButton extends React.Component {
  render() {
    return (
      <img
          key={this.props.meme.id}
          width='50'
          height='50'
          src={this.props.meme.url}
          alt=''
          onClick={this.props.reselectMeme}
          onMouseOver={this.props.changeText}
          onMouseLeave={this.props.resetText}
          className='meme-template' >
      </img>
    );
  }
  
}

class MemeTextBox extends React.Component {
  render() {
    return (
      <div className='memetext'>
        <p>Text Box {this.props.index + 1}</p>
        <textarea
          cols='50'
          rows='2'
          onChange={e => this.props.handleMemeText(this.props.index,e.target.value)}>
        </textarea>
      </div>
    );
  }
}

/** Component that handles the meme generator */
class MemeGenerator extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ""
    };
  }

  handleInput = (text) => {
    this.setState(() => ({
      searchTerm: text
    }));
  }

  uploadMeme = (event) => {
    event.preventDefault();
    let myImg = {
      template_id: this.props.currentMeme.id,
      photoURL: this.props.currentMeme.url,
      memeTexts: this.props.memeText,
      user: "Daniel Truong"
    };
    axios.post('/upload', myImg)
      .then(response => {
        if (response.status === 200){
          window.location.href = "/gallery";
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  checkMatch = (meme) => {
    let regexp = new RegExp(this.state.searchTerm,'gi');
    return (this.state.searchTerm === "" || meme.name.match(regexp) != null);
  }

  createTextBoxes = () => {
    let boxList = [];
    if (this.props.currentMeme) {
      for (let i = 0; i < this.props.currentMeme.box_count; i++) {
        boxList.push(
          <MemeTextBox key={i} index={i} handleMemeText={this.props.handleMemeText}/>
        );
      }
    }
    return boxList;
  }

  render() {
    let imgObj = this.props.memeArray ? this.props.currentMeme : null;
    return (
      <div className='meme-gen'>
        {/* align left  */}
        <h2 className="title">Meme Generator</h2>

        <div className='left-col'>
          <div className='img-preview'>
            <Canvas imgObj={imgObj} />
          </div>
        </div>
        
        <div className='right-col'>
          <div className='textboxes'>
            {this.createTextBoxes()}
          </div>
          <div className='template-search'>
            <div className='buttons-section'>
              <button type="submit" onClick={this.uploadMeme}> Submit Meme </button>
              <button type="submit" onClick={this.props.downloadMeme}>Download Meme</button>
            </div>
            <input id='search' type='text' onChange={e => this.handleInput(e.target.value)}></input>
            <div id='catalogue'>
              <p style={{
                fontWeight: this.props.isBold ? 'bold' : 'normal'
              }}>{this.props.displayName}</p>
              <div id='meme-templates'>
                {
                  this.props.memeArray &&
                  this.props.memeArray.filter(this.checkMatch).map((meme) => (
                    <TemplateButton
                      key={meme.id}
                      meme={meme}
                      reselectMeme={() => this.props.reselectMeme(meme)}
                      changeText={() => this.props.changeText(meme)}
                      resetText={this.props.resetText}/>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
  }
}

/**
 * Component for rendering all canvas elements
 * May be used to also draw text
 */
class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  drawImage() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (this.props.imgObj) {
      let img = new Image();
      img.onload = () => {ctx.drawImage(img,0,0,img.width,img.height,
                                            0,0,canvas.width,canvas.height)};
      img.src = this.props.imgObj.url;
    }
  }

  componentDidMount() {
    this.drawImage();
  }

  componentDidUpdate() {
    this.drawImage();
  }

  render() {
    let width;
    let height;
    if (this.props.imgObj) {
      width = 500;
      height = this.props.imgObj.height/(this.props.imgObj.width/500);
    } else {
      width = 0;
      height = 0;
    }
    return (
      <div>
        <canvas
          width={width}
          height={height}
          ref={this.canvasRef}
        />
      </div>
    );
  }
}

export default MemeGenerator;
