import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import DonationsCard from "../DonationsCard/DonationsCard";

class DonationsContainer extends Component {
  render() {
    const { donations } = this.props;
    const displayDonations = donations.map(donation => (
      <DonationsCard {...donation} key={donation.id} />
    ));
    return (
      <section className="donations-container">{displayDonations}</section>
    );
  }
}

const mapStateToProps = state => ({
  donations: state.donations
});

DonationsContainer.propTypes = {
    donations: PropTypes.array
}

export default connect(mapStateToProps)(DonationsContainer);
