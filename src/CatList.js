import React from "react";

const CatList = ({ catPics }) => (
  <div>
    {catPics.map(pic => <img src={pic.url} />)}
  </div>
);

export default CatList;