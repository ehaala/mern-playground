import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';

const songs = [
'https://open.spotify.com/embed?uri=spotify:track:02DGz57a3TK3jNiibbnxaK&theme=white',
'https://open.spotify.com/embed?uri=spotify:track:6mVjlizvk7mq58DJl7pQ2j&theme=white',
'https://open.spotify.com/embed?uri=spotify:track:3whrwq4DtvucphBPUogRuJ&theme=white'
]
const spot = 'https://open.spotify.com/embed?uri='

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      spotify: []
    };

  }

  componentDidMount() {
    this.getData(this, 'Spotify');
  }

  componentWillReceiveProps(nextProps) {
    this.getData(this, 'Spotify');
  }

  getData(ev, type) {
    axios.get('/getAll?type='+type)
      .then(function(response) {
        ev.setState({spotify: response.data});
      });
  }

// spotify:track:2XW4DbS6NddZxRPm5rMCeY

  render() {
      return (
        <div>
          <Add />
          {this.state.spotify.map((song, i) =>
            <div key={'song_' + i} className="songs">
              <iframe src={spot + song.url} 
              width="90%" height="380" frameBorder="0" allowtransparency="true">
              </iframe>
            </div>
          )}
        </div>
      );
  }
}