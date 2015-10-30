import React from 'react';
import withViewport from './withViewport';

@withViewport
class MyComponent {
  render() {
    let { width, height } = this.props.viewport;
    return <div>{`Viewport: ${width}x${height}`}</div>
  }
}

export default MyComponent;
