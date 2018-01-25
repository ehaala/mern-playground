import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');

class Add extends React.Component {
	constructor() {
		super();

		this.state = {
			description: '',
			time: '',
			day: '',
			messageFromServer: '',
			modalIsOpen: false
		}

		this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.insertNewTask = this.insertNewTask.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
		this.setState({
			modalIsOpen: true
		});
	}

	closeModal() {
		this.setState({
			modalIsOpen: false,
			description: '',
			time: '',
			day: '',
			messageFromServer: ''
		});
	}

	componentDidMount() {
		this.setState({
			day: this.props.selectedDay
		});
	}

	handleSelectChange(e) {
		if (e.target.name == 'day') {
			this.setState({
				day: e.target.value
			});
		}
	}

	onClick(e) {
		this.insertNewTask(this);
	}

	insertNewTask(e) {
		axios.post('/insert',
			querystring.stringify({
				desc: e.state.description,
				time: e.state.time,
				day: e.state.day
			}), {
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				}
			}).then(function(response) {
				e.setState({
					messageFromServer: response.data
				});
			});
	}

	handleTextChange(e) {
		if (e.target.name == "description") {
			this.setState({
				description: e.target.value
			});
		}
		if (e.target.name == "time") {
			this.setState({
				time: e.target.value
			});
		}
	}

	render() {
	   if(this.state.messageFromServer == ''){
	      return (
	        <div>
	      <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
	          <Modal
	            isOpen={this.state.modalIsOpen}
	            onRequestClose={this.closeModal}
	            contentLabel="Add Task"
	       className="Modal">
	<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
	       <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
	      </Link><br/>
	<fieldset>
	       <label for="description">Description:</label><input type="text" id="description" name="description" value={this.state.description} onChange={this.handleTextChange}></input>
	       <label for="time">Time (Hours):</label><input type="number" id="time" name="time" value={this.state.time} onChange={this.handleTextChange}></input>
	       <label for="day">Day:</label><select id="day" name="day" value={this.state.day} onChange={this.handleSelectChange}>
	            <option value="Mon" id="Mon">Monday</option>
	            <option value="Tues" id="Tues">Tuesday</option>
	            <option value="Wed" id="Wed">Wednesday</option>
	            <option value="Thur" id="Thur">Thursday</option>
	            <option value="Fri" id="Fri">Friday</option>
	            <option value="Sat" id="Sat">Saturday</option>
	            <option value="Sun" id="Sun">Sunday</option>
	         </select>
	      </fieldset>
	<div className='button-center'>
	        <br/>
	        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New Task</Button>
	       </div>
	          </Modal>
	        </div>
	      )
	   }
	   else{
	    return (
	     <div>
	       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
	       <Modal
	        isOpen={this.state.modalIsOpen}
	        onAfterOpen={this.afterOpenModal}
	        onRequestClose={this.closeModal}
	        contentLabel="Add Task"
	        className="Modal">
	<div className='button-center'>
	        <h3>{this.state.messageFromServer}</h3>
	        <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
	         <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
	        </Link>
	       </div>
	      </Modal>
	       </div>
	     )
	    }
	   }
	}
export default Add;