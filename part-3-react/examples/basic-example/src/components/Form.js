import React from 'react';

/** Form for creating posts */
class Form extends React.Component {
  render() {
    return (
      <form className="post" onSubmit={this.props.handleSubmit}>
        <input type="text" className="textbox" placeholder="What's on your mind?" onChange={this.props.handleChange} value={this.props.text}/>
        <input type="submit" className="submit"></input>
      </form>
    );
  }
}

export default Form;