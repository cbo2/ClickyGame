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
  Jumbotron,
  Card
} from "reactstrap";
// import Thumbnail from "bootstrap";


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
      isOpen: false,
      dogs: []
    };
  }

  componentDidMount() {
    let dogs = []
    for (let i = 1; i < 13; i++) {
      dogs.push({ picture: require(`./Dog${i}.jpg`), num: i })
    }
    this.setState({ dogs })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  scramble = (num) => {
    console.log(`hello`)
    console.log(`we clicked on: ${num}`)

    const dogs = this.shuffle(this.state.dogs)
    console.log(`the value of dogs is ${dogs}`)
    this.setState({ dogs })

  }


  // <Col sm={{ size: 'auto', offset: 2 }} className="pic1"></Col>


  // columnEnd = () => {
  //   return(<Col>)
  // }

  // startRow = (index) => {
  //   if (index % 4 === 0)
  //     return(<Row>)
  // } 



  // getColumn = (index) => {
  //   if (index % 4 ===0)
  //     return (<Col sm={{ size: 'auto', offset: 2 }}>)
  //   else
  //     return (<Col sm={{ size: 'auto', offset: 0 }}>)
  // }

 

  renderCards = () => {
    return this.state.dogs.map((dog, index) => {
      return (
        
        // <div>{index % 3 === 0 ? (<Row>) : () } </div>
        <div key={index} style={{ display: "inline-block", height: "250px", width: "240px" }}>
          {/* {this.startRow(index)} */}
          {/* {this.getColumn(index)} */}
          <img onClick={() => this.scramble(dog.num)} className={`pic${index}`} src={dog.picture} alt="..." num={dog.num} />
          {/* {this.columnEnd} */}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <Navbar className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
          <NavbarBrand href="/">Craig's Clicky Game</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
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
        <div class="col-sm-9" style={{ marginLeft: '15%' }}>
          {this.renderCards()}
        </div>

      </div>
    );
  }
}

export default App;
