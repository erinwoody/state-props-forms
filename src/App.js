import React, { Component } from "react";
import BaseLayout from "./components/BaseLayout";
import PlayList from "./components/PlayList";
import PlayListForm from "./components/PlayListForm";
import "./styles/App.css";
import "./styles/Custom.css";

export default class App extends Component {
  render() {
    return (
      <BaseLayout>
        <div className="App">
          <header id="page-top" className="masthead hero">
            <div className="header-content">
              <div className="header-content-inner">
                <h1>
                  Playlist
                </h1>
                <br />
                {/* <h3>:|: Song Sharing Made Easy :|:</h3> */}
              </div>
            </div>
          </header>
          <PlayListForm />

          <PlayList />
        </div>
      </BaseLayout>
    );
  }
}
