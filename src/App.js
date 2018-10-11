import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Col,
  Row,
  Jumbotron
} from "reactstrap";


const buttonStyle = {
  background: 'black',
  color: 'white'
};

const jumbotronStyle = {
  background: 'yellow',
  color: 'black'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
          <NavbarBrand href="/">Craig's Clicky Game</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/cbo2/clicky-game">
                  GitHub
                </NavLink>
              </NavItem> */}
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link score" href="/">Score: 0</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link top-score" href="/">Top Score: 0</a>
                </li>
              </ul>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron style={jumbotronStyle}>
          <h1 align="center">Clicky Game!</h1>
          <p align="center">Click any image and earn a point...but, be careful not to click the same image again!</p>
        </Jumbotron>
        {/* <div className="align-items-center"> */}
        {/* <Row><p>1</p></Row>
        <Row>
          <p>2</p>
          <Button color="primary">Hit Me</Button>
        </Row>
        <Row><p>3</p></Row>
        <Col sm={{ size: 'auto', offset: 5 }}>
          <Button style={buttonStyle} color="primary">(Centered Button) Hit Me</Button>
        </Col>
        <br>
        </br>
        <br>
        </br> */}
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }} className="pic1">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} className="pic2">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} className="pic3">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} className="pic4">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }} className="pic5">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} className="pic6">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} className="pic7">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} className="pic8">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }} className="pic9">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} className="pic10">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} className="pic11">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} className="pic12">
            <a href="#" className="thumbnail">
              <img src={require("./Dog1.jpg")} alt="..." />
            </a>
          </Col>
        </Row>
        {/* </div> */}
      </div>
    );
  }
}

export default App;
