import React, {Component} from 'react';

export default class Bio extends Component {
  constructor() {
    super();
  };

  render() {
    return(
      <div className="bio">
        <p>A Mars rover is an automated motor vehicle that propels itself across the surface of the planet Mars upon arrival. Rovers have several advantages over stationary landers: they examine more territory, and they can be directed to interesting features, they can place themselves in sunny positions to weather winter months, and they can advance the knowledge of how to perform very remote robotic vehicle control.</p>
        <p>There have been four successful robotically operated Mars rovers. The Jet Propulsion Laboratory managed the Mars Pathfinder mission and its now inactive Sojourner rover. It currently manages the Mars Exploration Rover mission's active Opportunity rover and inactive Spirit, and, as part of the Mars Science Laboratory mission, the Curiosity rover. On January 24, 2016 NASA reported that current studies on the planet Mars by the Curiosity and Opportunity rovers will now be searching for evidence of ancient life, including a biosphere based on autotrophic, chemotrophic, and/or chemolithoautotrophic microorganisms, as well as ancient water, including fluvio-lacustrine environments (plains related to ancient rivers or lakes) that may have been habitable.  The search for evidence of habitability, taphonomy (related to fossils), and organic carbon on the planet Mars is now a primary NASA objective.</p>
      </div>
    );
  };
};
