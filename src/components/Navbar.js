import React from 'react';
import '../styles/Navbar.css'

import { Navbar, NavItem, Nav} from 'react-bootstrap';

export default class MyNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.capNhatChuoi(e.target.value)
  }

  handleKeyUp(event) {
    if(event.keyCode === 13) {
      this.props.timKiem(this.props.query)
      this.props.history.push('/btcn04/search')
    }
  }

  onExploreClick() {
    this.props.history.push('/btcn04/')
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Flickr</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} onClick={this.onExploreClick.bind(this)}>
            Explore
        </NavItem>
          <NavItem eventKey={2} href="#">
            <div className="search-container">
                <input onKeyUp={this.handleKeyUp} style={{ color: '#000', width: '300px' }} type="text" placeholder="Search.." name="q" onChange={this.handleChange} value={this.props.query}/>
            </div>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
