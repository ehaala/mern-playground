import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'

const spot = 'https://open.spotify.com/embed?uri='

class Carousel extends React.Component{
  render() {
    var settings = {
      dots: true
    }
    return (
      <div className='container'>
        <Slider {...settings}>
          {this.props.spotify.map((song, i) =>
            <div key={'song_' + i} className="songs">
              <iframe src={spot + song.url} 
              width="90%" height="400px" frameBorder="0" allowtransparency="true">
              </iframe>
            </div>
          )}
          {this.props.youtube.map((song, i) =>
            <div key={'song_' + i} className="songs">
              <iframe src={song.url} 
              width="90%" height="400px" frameborder="0" 
              allow="autoplay; encrypted-media" allowfullscreen>
              </iframe>
            </div>
          )}
        </Slider>
      </div>
    );
  }
}

export default Carousel;