import React from 'react';
require('../style/generator.css')

/** Component for selecting meme template */
class TemplateButton extends React.Component {
  /* 
      TODO: complete this component
           Props: meme, an object containing information about the meme.
                        You'll need the id and url properties.                       
                  reselectMeme, a function that changes the meme template on the left 
                                when the image is clicked.
                  changeText, a function that changes the name of the meme template when
                              hovering over different templates.
                  resetText, a function that resets the displayed name to the current
                             template when the mouse leaves the buttons.
  */
}

/** Text box for meme captions */
class MemeTextBox extends React.Component {
  /*
      TODO: complete this component
          Props: index, a number indicating which text box this is
                 handleMemeText, a function that updates 
                                 the state in MemeGeneratorWrapper when we 
                                 update the text
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

  checkMatch = (meme) => {
    let regexp = new RegExp(this.state.searchTerm,'gi');
    return (this.state.searchTerm === "" || meme.name.match(regexp) != null);
  }

  createTextBoxes = () => {
    /* 
        TODO: create a list of text boxes for the user to enter text into
            Props: currentMeme, an object containing fields
                   handleMemeText, a function that updates 
                   the state in MemeGeneratorWrapper when we 
                   update the text
    */
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
