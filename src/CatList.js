import React from 'react'

export const CatList = props =>
  <div>
    {props.catPics.map(pic => <img src={pic.url} alt={pic.id} key={pic.id} />)}
  </div>

export default CatList