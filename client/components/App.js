import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import Carousel from './Carousel';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spotify: [],
      youtube: []
    };

  }

  componentDidMount() {
    this.getData(this, 'Spotify');
    this.getData2(this, 'YouTube');
  }

  componentWillReceiveProps(nextProps) {
    this.getData(this, 'Spotify');
    this.getData2(this, 'YouTube');
  }

  getData(ev, type) {
    axios.get('/getAll?type='+type)
      .then(function(response) {
        ev.setState({spotify: response.data});
      });
  }

  getData2(ev, type) {
    axios.get('/getAll?type='+type)
      .then(function(response) {
        ev.setState({youtube: response.data});
      });
  }

  render() {
      return (
        <div>
          <Carousel spotify={this.state.spotify} youtube={this.state.youtube}/>
        </div>
      );
  }
}