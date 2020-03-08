// write your CatList component here
import React from 'react';

class CatList extends React.Component {
  render() {
    const catsList = this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)
    return (
      <div>
        {catsList}
      </div>
    )
  }
}

export default CatList;