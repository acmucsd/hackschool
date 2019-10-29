import React from 'react';

/** Component that displays each item of text that gets entered */
class Feed extends React.Component {
  render() {
    return (
      <div className="feed">
        {
          this.props.textList.map(element => 
            <div className="post"><p>{element}</p></div>
          )
        }
      </div>
    );
  }
}

export default Feed;