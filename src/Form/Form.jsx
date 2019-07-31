import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      donation: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitDonation = event => {
    event.preventDefault();
    const newDonation = {
      id: Date.now(),
      ...this.state
    };
    this.props.postDonations(newDonation);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      name: "",
      donation: ""
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          type="number"
          placeholder="$ Amount"
          name="donation"
          value={this.state.donation}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.submitDonation(event)}>Donate!</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  donations: state.donations
});

Form.propTypes = {
  donations: PropTypes.array,
  postDonations: PropTypes.func
};

export default connect(mapStateToProps)(Form);
