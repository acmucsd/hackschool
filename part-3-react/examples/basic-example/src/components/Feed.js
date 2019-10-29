import React from 'react';

/** Component that displays each item of text that gets entered */
class Feed extends React.Component {
  render() {
    console.log(this.props.textList);
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