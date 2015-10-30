import React, { Component } from 'react';

function withViewport(ComposedComponent) {
  return class WithViewPort extends Component {

    state = {
      viewport: { width: window.innerWidth, height: window.innerHeight }
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }

    render() {
      return <ComposedComponent {...this.props} viewport={this.state.viewport} />
    }

    handleResize = () => {
      let viewport = { width: window.innerWidth, height: window.innerHeight };
      if (this.state.viewport.width !== viewport.width ||
        this.state.viewport.height !== viewport.height) {
          this.setState({ viewport });
        }
    }
  }
}

export default withViewport;
