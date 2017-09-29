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

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
        console.log(response, "working!");
      })
      .catch(err => {
        console.log(err, "error");
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
      <section id="playlist-form">
        <div className="container-playlist-form">
          <div className="playlist">
            <div className="col-lg-8 mx-auto text-center">
            
              <form className="cf" onSubmit={this.addToList}>
                <div className="half left cf">
                  <input
                    onChange={this.handleInputChange}
                    value={userName}
                    type="text"
                    className="form-control"
                    name="userName"
                    placeholder="Enter your name"
                  />
                  <input
                    onChange={this.handleInputChange}
                    value={songArtist}
                    type="text"
                    className="form-control"
                    name="songArtist"
                    placeholder="Artist or Band"
                  />
                  <input
                    onChange={this.handleInputChange}
                    value={songTitle}
                    type="text"
                    className="form-control"
                    name="songTitle"
                    placeholder="Song Title"
                  />
                </div>
                <div className="half right cf">
                  <textarea
                    onChange={this.handleInputChange}
                    value={songNotes}
                    type="text"
                    className="form-control"
                    name="songNotes"
                    placeholder="Comments"
                  />
                </div>

                <button
                  id="input-submit"
                  type="submit"
                  className="btn btn-default btn-md"
                >
                  Add Song
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
