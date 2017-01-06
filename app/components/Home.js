import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="btn-group" role="group" aria-label="...">
        <button type="button" className="btn btn-primary">Left</button>
        <button type="button" className="btn btn-success">Middle</button>
        <button type="button" className="btn btn-warning">Right</button>
      </div>
    );
  }
}

export default Home;