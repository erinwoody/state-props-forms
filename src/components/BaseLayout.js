import React, { Component } from "react";

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="base">
        <nav className="navbar-nav" id="mainNav">
          <div className="nav-item">
            <a href="#playlist-form">Add A Song</a>
            <span> | </span>
            <a href="#playlist">See List</a>
            <span> | </span>
            <a href="#share">Share</a>
          </div>
        </nav>

        {this.props.children}

        <footer>
          <div id="share" className="footer-bar col-12">
            {/* <h3 className="text-white">Enjoying Songster?</h3> */}
            <br />
            <a className="btn btn-default btn-md sr-button">
              Share With Friends!
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
