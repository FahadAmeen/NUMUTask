import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

export class Shows extends Component {
  render() {
    return (
      <div>
        <h1 className="align-top display-4">TV Shows</h1>
        <ul className="list-group list-group-flush">
          {this.props.shows.map(show => <li className="list-group-item list-group-item-action " key={show.id}> <Link className="link" to={'/show/' + show.id}>{show.name}</Link></li>)}
        </ul>
      </div>
    )
  }
}

export default Shows;