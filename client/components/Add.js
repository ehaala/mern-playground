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
			type: '',
			url: '',
			messageFromServer: '',
			modalIsOpen: false
		}

		this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.insertNewSong = this.insertNewSong.bind(this);
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
			type: '',
			url: '',
			messageFromServer: ''
		});
	}

	handleSelectChange(e) {
		if (e.target.name == 'type') {
			this.setState({
				type: e.target.value
			});
		}
	}

	onClick(e) {
		this.insertNewSong(this);
	}

	insertNewSong(e) {
		axios.post('/insert',
			querystring.stringify({
				type: e.state.type,
				url: e.state.url
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
		if (e.target.name == "url") {
			this.setState({
				url: e.target.value
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
			      	<label for="url">URL:</label>
			       		<input type="text" id="url" name="url" value={this.state.url} onChange={this.handleTextChange}></input>
			      	<label for="type">Type:</label>
			      		<select id="type" name="type" value={this.state.type} onChange={this.handleSelectChange}>
			      			<option value="null" id="null">Please Select</option>
			            <option value="Spotify" id="Spotify">Spotify</option>
			            <option value="YouTube" id="YouTube">YouTube</option>
			        	</select>
			      </fieldset>
						<div className='button-center'>
			        <br/>
			        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New Song</Button>
			      </div>
	        </Modal>
        </div>
	    )
	  } else {
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