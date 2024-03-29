import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Loader.css";
import officePreLoad from "../images/mockingjay_loader.png";

class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="Loader">
        <img class="image_loader" src={officePreLoad} />
      </div>
    );
  }
}

export default Loader;
