import React, { Component } from "react";
import { connect } from "react-redux";
import AnimalCard from "../AnimalCard/AnimalCard";
import PropTypes from "prop-types";

class AnimalContainer extends Component {
  render() {
    const { animals } = this.props;
    const displayAnimals = animals.map(animal => (
      <AnimalCard {...animal} key={animal.id} />
    ));
    return <section className="animal-container">{displayAnimals}</section>;
  }
}

const mapStateToProps = state => ({
  animals: state.animals
});

AnimalContainer.propTypes = {
  animals: PropTypes.array
};

export default connect(mapStateToProps)(AnimalContainer);
