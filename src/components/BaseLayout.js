import React, { Component } from "react";

export default class BaseLayout extends Component {
  render() {
    return (
      <div id="page-top">
        <div>
          <nav
            className="navbar navbar-expand-lg navbar-light fixed-top"
            id="mainNav"
          >
            <div className="container" id="nav-item">
              <a className="navbar-brand js-scroll-trigger" href="#page-top">
                Playlist
              </a>
              <div className="" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link js-scroll-trigger"
                      href="#playlist-form"
                    >
                      Add A Song
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#playlist">
                      See Playlist
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#share">
                      Share
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="body">
        <div>
          <header className="masthead">
            <div className="intro-body">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <h1 className="brand-heading">Playlist</h1>
                    <p className="intro-text">
                      Request A Song!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

        {this.props.children}

        <footer>
          <div id="share" className="footer-bar col-12">
            <br />
            <a className="btn btn-default btn-md sr-button">
              Share With Friends!
            </a>
          </div>
        </footer>
        </div>
        </div>  
    );
  }
}
