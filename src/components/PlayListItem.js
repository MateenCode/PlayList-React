import React, { Component } from 'react';

class PlayListItem extends Component {

  render() {
    return (
      <div>
         {this.props.songs.map((block) => {
          return(
            <div className="card">







            </div>

          )
        })}

    </div>
    );
  }



}

export default PlayListItem;
