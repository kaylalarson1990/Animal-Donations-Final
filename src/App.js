import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getAnimals } from "./apiCalls/apiCalls";
import {
  setAnimals,
  addDonations,
  setDonations,
  loadComplete,
  hasErrored
} from "./actions/index";
import AnimalContainer from './AnimalContainer/AnimalContainer';

class App extends Component {
  componentDidMount() {
    getAnimals()
      .then(animals => this.props.setAnimals(animals))
      .then(this.props.loadComplete())
      .catch(error => hasErrored(error.message));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Animal Rescue</h2>
        </header>
        <main>
          <AnimalContainer />
        </main>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.error,
  isLoading: state.isLoading,
  animals: state.animals,
  donations: state.donations
});

export const mapDispatchToProps = dispatch => ({
  setAnimals: animals => dispatch(setAnimals(animals)),
  addDonations: donations => dispatch(addDonations(donations)),
  setDonations: donations => dispatch(setDonations(donations)),
  loadComplete: () => dispatch(loadComplete()),
  hasErrored: errorMsg => dispatch(hasErrored(errorMsg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
