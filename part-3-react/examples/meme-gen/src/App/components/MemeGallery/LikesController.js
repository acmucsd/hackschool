import React from 'react';
class LikesController extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      likes: this.props.likes,
      isBolded: this.props.isBolded,
    }

    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(event){
    event.preventDefault();
    let postConfig = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {id: this.props.id,
         likes: this.state.likes,
         isBolded: this.state.isBolded})
    };
    fetch('/likememe', postConfig)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState(data);
      })
      .catch((err) => console.log(err));
  }

  render(){
    const buttonType = this.state.isBolded ? "likedButton" : "unlikedButton";
    return(
      <form onSubmit={this.handleLike}>
        <button className={buttonType} type="Submit">
          <span role="img" aria-label="like">👍 </span>
          {this.state.likes}
        </button>
      </form>
    )
  }
}
export default LikesController;