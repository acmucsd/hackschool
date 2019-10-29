import React from 'react';
require('../style/meme.css');

/** Component that handles the overall meme gallery page.*/
class MemeGallery extends React.Component {
  constructor() {
    super();
    fetch('/getmemes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          memeArray: data,
        })
      });

    this.state = {
      memeArray: null,
    };
  }

  render() {
    const ourFavorites = this.state.memeArray ? this.state.memeArray.map ((meme) =>
      <MemeModel
        key={meme._id}
        id={meme._id}
        photoURL={meme.photoURL}
        topText={meme.topText}
        bottomText={meme.bottomText}
        user={meme.user}
        likes={meme.likes}
        isBolded={meme.isBolded}
      />
    ) : null;
    return(
      // example of inline style
      <div>
        <h2 className="title">Meme Gallery</h2>
        {ourFavorites}
      </div>
    );
  }
}

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

export default MemeGallery;
