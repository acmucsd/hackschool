import React from 'react';

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

export default MemeTextBox;