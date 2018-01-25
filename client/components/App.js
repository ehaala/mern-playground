import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import Update from './Update';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDay:'Mon',
      data: []
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(this, 'Mon');
  }

  componentWillReceiveProps(nextProps) {
    this.getData(this, 'Mon');
  }

  getData(ev, day){
    axios.get('/getAll?day='+day)
      .then(function(response) {
        ev.setState({data: response.data});
        ev.setState({selectedDay: parseInt(day)})
      });
  }
  render() {
      return (
        <div>
          <Add selectedDay={this.state.selectedDay} />
          <table>
            <thead>
              <tr><th></th><th className='desc-col'>Description</th><th className='button-col'>Time (Hours)</th><th className='button-col'>Day</th><th className='button-col'>Update</th></tr>
            </thead>
            <tbody>
              {
                this.state.data.map(function(task){
                  return  <tr><td className='counterCell'></td><td className='desc-col'>{task.description}</td><td className='button-col'>{task.time}</td><td className='button-col'>{task.day}</td><td className='button-col'><Update task={task} /></td></tr>
                })
              }
              </tbody>
  </table>
        </div>
      );
    }
}