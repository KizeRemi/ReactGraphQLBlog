import React, { PureComponent } from 'react';
import MapSrc from './constants';
import './style.css';

export class Map extends PureComponent {
  render() {
    return (
      <div class="map-responsive">
        <iframe
          src={MapSrc}
          width={1210}
          height={300}
          frameborder={0}
          style={{ border: 0 }}
          allowfullscreen
        />
      </div>
    );
  }
}

export default Map;
