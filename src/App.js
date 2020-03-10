import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount(){
    this.props.fetchCats()
  }

  handleLoading(){
    if (cats.loading === true){
      return <div>Loading...</div>
    } else {
      return  <CatList catPics={this.props.catPics}/>
    }
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
        {this.handleLoading}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapStatetoProps, {fetchCats} )(App)
