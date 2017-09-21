import React, { Component } from "react";

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songTitle: "",
      songArtist: "",
      songNotes: ""
    };
  }

  addToList = e => {
    e.preventDefault();
    this.setState({
      userName: e.target.value,
      songTitle: e.target.value,
      songArtist: e.target.value,
      songNotes: e.target.value
    });
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
    this.setState({
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    });
  };

  render() {
    let { userName, songArtist, songTitle, songNotes } = this.state;
    return (
      <div>
        <form onSubmit={this.addToList}>
          <div>
            <input
              name="userName"
              type="text"
              value={userName}
              placeholder="Username"
              onChange={this.handleInputChange}
            />
            <input
              name="songArtist"
              type="text"
              value={songArtist}
              placeholder="Artist or Band Name"
              onChange={this.handleInputChange}
            />
            <input
              name="songTitle"
              type="text"
              value={songTitle}
              placeholder="songTitle"
              onChange={this.handleInputChange}
            />
            <input
              name="songNotes"
              type="text"
              value={songNotes}
              placeholder="songNotes"
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
