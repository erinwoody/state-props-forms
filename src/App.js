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
        <PlayListForm />
        <PlayList />
      </BaseLayout>
    );
  }
}
