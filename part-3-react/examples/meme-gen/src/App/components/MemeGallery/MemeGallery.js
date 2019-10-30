import React from 'react';
import MemeModel from './MemeModel';
require('../../style/meme.css');

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

export default MemeGallery;
