import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
export class MovieDetail extends Component {
  state = {
    movie: {}
  }


  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/movie/'
      + this.props.match.params.id +
      '?api_key=bcf9e018bf3580b6e18c5876ec46f497')
      .then((res) => {
        this.setState({
          movie: res.data
        })
      });
  }

  render() {
    return (
      <div className="card border">
        <div className="card-header">
          <h1 className="display-4"><b>Movie Details</b></h1>
        </div>
        <div className="card-body">
          <Link className="btn btn-dark" to={'/'}>Go Back</Link>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>{this.state.movie.name}</h2>
                <img src={'http://image.tmdb.org/t/p/w185/' + this.state.movie.poster_path} class="img-fluid" alt=""></img>
              </div>
              <div className="col-7">
                <dl class="row">
                  <dt class="col-sm-3">Title</dt>
                  <dd class="col-sm-9">{this.state.movie.title}</dd>

                  <dt class="col-sm-3">Description</dt>
                  <dd class="col-sm-9">{this.state.movie.overview}</dd>

                  <dt class="col-sm-3">Vote Count</dt>
                  <dd class="col-sm-9">{this.state.movie.vote_count}</dd>


                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default MovieDetail
