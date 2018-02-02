import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Add from './Add';

class Navv extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			title: ''
		}

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle() {
		this.setState({
			open: !this.state.open
		})
	}

	//above function can be written as arrow function... don't have to bind this(see below)
	// onHome = () => this.setState({
	// 	open: false,
	// 	title: 'Home'
	// });

	// onAbout = () => this.setState({
	// 	open: false,
	// 	title: 'About'
	// });

// <div>
//   <AppBar
//     title={this.state.title}
//     iconClassNameRight="muidocs-icon-navigation-expand-more"
//     onLeftIconButtonClick={this.handleToggle}
//   />
//   <Drawer
//     docked={false}
//     width={250}
//     open={this.state.open}
//     onRequestChange={(open) => this.setState({open})}
//   >
//     <MenuItem onClick={this.onHome}>
//     	<Link className="tab" to="/">Home</Link>
//     </MenuItem>
//     <MenuItem onClick={this.onAbout}>
//     	<Link className="tab" to="/about">About</Link>
//     </MenuItem>
//   </Drawer>
// </div>

	render() {
		return (
			<div>
				<Navbar>
				  <Navbar.Header>
				    <Navbar.Brand>
				      <a href="#">Music Playground</a>
				    </Navbar.Brand>
				  </Navbar.Header>
				  <Nav>
				    <NavItem>
				      <Link className="tab" to="/">Home</Link>
				    </NavItem>
				    <NavItem>
				      <Link className="tab" to="/about">About</Link>
				    </NavItem>
				  </Nav>
				  <Nav pullRight>
				  	<NavItem>
				  		<Add />
				  	</NavItem>
				  </Nav>
				</Navbar>
			</div>
		)
	}
}

export default Navv;