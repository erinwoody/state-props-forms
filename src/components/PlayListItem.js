import React, { Component } from "react";

export default class PlayListItem extends Component {
  render() {
    let songs;
    songs = this.props.songs.map((song, index) => {
      return (
        <div key={index} className="list-items">
          <p>Added By: {song.userName}</p>
          <p>Artist/Band: {song.songArtist}</p>
          <p>Title: {song.songTitle}</p>
          <p>Comments: {song.songNotes}</p>
        </div>
      );
    });

    return (
      <div>
        <div>{songs}</div>
      </div>
    );
  }
}
