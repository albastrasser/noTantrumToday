import React from 'react';
import { connect } from 'react-redux';
import { authorName } from '../store';

export class NameEntry extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    console.log('handle--', evt.target.value);
    this.props.updateauth(evt.target.value);
  }

  render() {
    console.log('this-->', this.props);
    return (
      <form className="form-inline">
        <label htmlFor="name">Your name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="form-control"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
// const mapStateToProps = () => {

// }
const mapDispatchToProps = (dispatch) => {
  return {
    updateauth: (name) => dispatch(authorName(name)),
  };
};

export default connect(null, mapDispatchToProps)(NameEntry);
