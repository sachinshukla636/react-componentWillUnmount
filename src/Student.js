import React from 'react';

export default class Student extends React.Component {
  componentWillUnmount() {
    alert('componentWillUnmount called');
  }
  render() {
    return (
      <div>
        <h1>componentWillUnmount</h1>
      </div>
    );
  }
}
