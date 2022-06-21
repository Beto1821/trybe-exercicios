// src/App.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from './actions/index';

class App extends Component {
  render() {
    const { isFetching,src , fetchAPI } = this.props;
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={fetchAPI}
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={src} alt="dog" />
        </div>
      )
  );
}
}

const mapStateToProps = (state) => ({
  src: state.gallery.imgURL?.message,
  isFetching: state.isFetching});

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchAPI())});

export default connect(mapStateToProps, mapDispatchToProps)(App);