import React, { Component } from "react";

export default class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      data: "null",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedState");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.fetchData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {}

  render() {
    return <div>LifeCycleExample</div>;
  }
}
