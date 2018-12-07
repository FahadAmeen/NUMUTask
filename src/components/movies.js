import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './home.css'

export class Movies extends Component {

  render() {
    return (
      <div>
        <h1 className="align-top">Movies</h1>
        <ul className="list-group list-group-flush">
          {this.props.movies.map(movie => <li className="list-group-item list-group-item-action" key={movie.id}> <Link className="link" to={'/movie/' + movie.id}>{movie.title}</Link></li>)}
        </ul>
      </div>
    )
  }
}

export default Movies;
