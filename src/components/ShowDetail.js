import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
export class ShowDetail extends Component {
  state = {
    show: {}
  }


  componentWillMount() {
    axios.get('https://api.themoviedb.org/3/tv/'
      + this.props.match.params.id +
      '?api_key=bcf9e018bf3580b6e18c5876ec46f497')
      .then((res) => {
        this.setState({
          show: res.data
        })
      });
  }

  render() {
    return (
      <div>
        <Link className="btn btn-dark" to={'/'}>Go Back</Link>
        <h1>Show Details</h1>
        title : {this.state.show.name}
        {console.log(this.state.show)}
      </div>
    )
  }
}

export default ShowDetail
