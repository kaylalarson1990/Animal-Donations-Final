import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DonationsCard from "../DonationsCard/DonationsCard";

class DonationsContainer extends Component {
  render() {
    const { donations } = this.props;
    const displayDonations = donations.map(donation => (
      <DonationsCard {...donation} name={donation.name} donation={donation.donation} key={donation.id} />
    ));
    return (
      <aside>
        <h2 className="recent-donations">Recent Donations:</h2>
        <section className="donations-container">{displayDonations}</section>
      </aside>
    );
  }
}

const mapStateToProps = state => ({
  donations: state.donations
});

DonationsContainer.propTypes = {
  donations: PropTypes.array
};

export default connect(mapStateToProps)(DonationsContainer);
