import React from 'react';

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

export default TemplateButton;