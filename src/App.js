import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions'
import CatList from './CatList';

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }

  loading() {
    if (this.props.loading) {
      return 'LOADING . . .'
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {this.loading()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchCats })(App)

