import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  constructor() {
    super();
  };
  render() {
    let image = this.props.image;
    return(
      <div>
        <div>
          {image.img_src}
        </div>
      </div>

    );
  };
}
