import React, { Component } from 'react'
import { Movies } from "./movies";
import { Shows } from "./shows";
import "./home.css"

import axios from "axios";

export class Home extends Component {

    state = {
        movies: [],
        shows: []
    }


    componentWillMount() {

        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=bcf9e018bf3580b6e18c5876ec46f497').then((res) => {
            this.setState({
                movies: res.data.results
            })
        });

        axios.get('https://api.themoviedb.org/3/discover/tv?api_key=bcf9e018bf3580b6e18c5876ec46f497').then((res) => {
            this.setState({
                shows: res.data.results
            })
        });

    }

    render() {
        return (
            <div className="card border">
                <div className="card-header">
                    <h1>NUMU</h1>
                </div>
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Movies movies={this.state.movies}></Movies>
                            </div>
                            <div className="col">
                                <Shows shows={this.state.shows}></Shows>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
