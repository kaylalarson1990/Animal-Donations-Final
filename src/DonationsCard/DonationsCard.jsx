import React from "react";
import PropTypes from "prop-types";

const DonationsCard = ({ name, donation }) => {
  return (
    <section className="donation-card">
      <p>
        <span className="title">{name} </span> recently donated: ${donation}
      </p>
    </section>
  );
};

DonationsCard.propTypes = {
    name: PropTypes.string,
    donation: PropTypes.number
}

export default DonationsCard;
