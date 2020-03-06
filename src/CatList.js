// write your CatList component here
import React, { Component} from 'react'

class CatList extends Component{

  render(){
    const catImages = this.props.catPics.map(catpic => {
      return <img key={catpic.id} src={catpic.url} /> })


    return(
      <div>{catImages}</div>
    )
  }
}

export default CatList;
