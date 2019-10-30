import React from 'react';
import LikesController from './LikesController';
// Component that handles each meme displayed.
class MemeModel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id,
      photoURL: this.props.photoURL,
      topText: this.props.topText,
      bottomText: this.props.bottomText,
      user: this.props.user,
    };
  }

  render(){
    return(
      <div className="memeModel">
        <div className="memeImageOutline">
          <img className="memeImage" src={this.state.photoURL} alt={this.state.photoURL}/>
          <h2> {this.props.topText} </h2>
          <h2> {this.props.bottomText} </h2>
        </div>
        <div className="controls">
          <h4> by {this.props.user} </h4>
          <LikesController likes={this.props.likes}
                           isBolded={this.props.isBolded}
                           id={this.state.id} />
        </div>
      </div>
    )
  }
}
export default MemeModel;