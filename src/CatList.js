// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component {
    render() {
        const cats = this.props.catPics.map( cat => {
            return <img key={cat.id} src={cat.url}></img>
        })
        return (
            <div>
                {cats}
            </div>
        )
    }
}

export default CatList