import React from "react";
import PropTypes from "prop-types";

const DonationsCard = ({ name, donation }) => {
  return (
    <section className="donation-card">
      <p>
        <span className="title">{name} </span> recently donated:
      </p>
      <p className="title">{donation} dollars</p>
    </section>
  );
};

export default DonationsCard;
