import React, { Component } from "react";
import PropTypes from "prop-types";

class AnimalCard extends Component {
  render() {
    const { img, name, species, description } = this.props;
    return (
      <article className="card">
        <img className="card-img" src={img} alt={`${name} image`} />
        <p className="name">{name}</p>
        <p className="species">{species}</p>
        <p className="description">{description}</p>
      </article>
    );
  }
}

AnimalCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  description: PropTypes.string
};

export default AnimalCard;
