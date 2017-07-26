import React, { Component } from 'react';

export default class GetImageButton extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return(
      <div>
        <button onClick={this.props.handleSubmit}>Submit</button>
      </div>
    );
  };
}
