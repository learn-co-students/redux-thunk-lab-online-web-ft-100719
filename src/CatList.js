// write your CatList component here
import React, { Component } from 'react';

export default class Catlist extends Component {
  displayCatList = isLoading => {
    if (isLoading) {
      return <h3>Loading...</h3>
    } else {
      return this.props.catPics.map(pic => {
        return <img src={pic.url} key={pic.id} alt={pic.id} />
      })
    }
  }

  render() {
    return (
      <div>
        {this.displayCatList(this.props.loading)}
      </div>
    )
  }
}