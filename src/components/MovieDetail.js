import React, { Component } from 'react'
import axios from 'axios';

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
      <div>
        <h1>Movie Details</h1>
        title : {this.state.movie.title}
        {console.log('props:', this.props, 'state', this.state.movie)}

      </div>
    )
  }
}

export default MovieDetail
