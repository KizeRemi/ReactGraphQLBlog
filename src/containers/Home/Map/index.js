import React, { PureComponent } from 'react';
import MapSrc from './constants';
import './style.css';

export class Map extends PureComponent {
  render() {
    return (
      <div className="map-responsive">
        <iframe
          title="Headquarter Eleven Labs - Paris - Google Maps"
          src={MapSrc}
          width={1210}
          height={300}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    );
  }
}

export default Map;
