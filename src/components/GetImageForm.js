import React, { Component } from 'react';
import GetImageButton from './GetImageButton.js';
import ImageDisplay from './ImageDisplay.js';

const Key = 'N8mYGJO8YHHPJBXiLb61SgA3I2geLqXcn8PzC4X1';
export default class GetImageForm extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      rover: 'Curiosity',
      camera: 'navcam',
      sol: '1000'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object)
    // this.setState(object)
  }

  handleSubmit(event) {
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&camera=${this.state.camera}&api_key=${Key}`;
    fetch(imageUrl).then((result) => {
      result.json().then((response) => {
        console.log('one',response);
      this.setState({
        images: response.photos
      })
      });
    });
  }

  render() {
    let images = this.state.images.map((image) => {
      return <ImageDisplay key={image.id} image={image}/>
    });

    return(
      <div>
        <form>
          <label htmlFor="rover">Rover</label>
            <select onChange={this.handleChange} name="rover" value={this.state.rover}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
          <label htmlFor="camera">Camera Type</label>
            <select onChange={this.handleChange} name="camera" value={this.state.camera}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleChange} name="sol" max="2000" min="1000" value={this.state.sol} />
        </form>
        <GetImageButton handleSubmit={this.handleSubmit}/>
        <div className="flex">
          {images}
        </div>
      </div>
    );
  };
}
