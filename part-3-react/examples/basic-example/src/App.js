import React from 'react';
import './App.css';
import Form from './components/Form';
import Feed from './components/Feed';

/** The parent component that manages state for all other components. */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      textList: []
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.value !== "") {
      let newTextList = this.state.textList;
      newTextList.push(this.state.text);
      this.setState({
        text: "",
        textList: newTextList
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} text={this.state.text}/>
        <Feed textList={this.state.textList}/>
      </div>
    );
  }
}

export default App;
