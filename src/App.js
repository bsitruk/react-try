import React, { Component } from 'react';
import { NumInput } from './NumInput';

export class App extends Component {
  state = {
    red: 0
  }
  update = () => {
    this.setState({
      red: React.findDOMNode(this.refs.red.refs.inp).value
    });
  }
  render() {
    return (
      <div>
        <NumInput
          ref="red"
          min={0}
          max={255}
          step={1}
          val={+this.state.red}
          type="range"
          label="Red"
          update={this.update} />
      </div>
    );
  }
}
