import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className={"footer container"}>
        <p>
          API:
          <a href="https://www.blockchain.com/api">
            https://www.blockchain.com/api
          </a>
        </p>
        <p>

          View source:
          <a href="https://github.com/VlTre/Bitcoin-ticker">
            https://github.com/VlTre/Bitcoin-ticker
          </a>{" "}
        </p>
      </div>
    );
  }
}

export default Footer;
