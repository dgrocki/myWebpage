import React, { Component } from 'react';
import Expand from 'react-expand-animated';
 
class ExpandMenu extends Component {
  state = { open: false };
 
  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };
 
  render() {
    return (
      <div>
      <button onClick={this.toggle}>Open</button>
        <Expand open={this.state.open}>
          <div style={{ width: '300px', height: '400px', color: 'red' }}>Hello</div>
        </Expand>
      </div>
    );
  }
}
 
export default ExpandMenu;