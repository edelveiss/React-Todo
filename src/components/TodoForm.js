import React from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  Form,
  Navbar,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Icon from "@material-ui/core/Icon";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: "",
      buttonDisabled: true,
    };
  }

  handleChanges = (e) => {
    // update state with each keystroke

    // if (this.state.itemName) {
    //   this.setState({ buttonDisabled: false });
    // } else {
    //   this.setState({ buttonDisabled: true });
    // }
    this.setState({ itemName: e.target.value });
  };

  // class property to submit form
  handleAddItem = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.itemName);
    this.setState({
      itemName: "",
    });
    // update state of local component here
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleAddItem} inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <Icon>star</Icon>
              </InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl
              placeholder="Enter todo"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={this.state.itemName}
              onChange={this.handleChanges}
            />
          </InputGroup>
          {this.state.itemName ? (
            <Button disabled={!this.state.buttonDisabled} type="submit">
              Submit
            </Button>
          ) : (
            <Button disabled={this.state.buttonDisabled} type="submit">
              Submit
            </Button>
          )}
        </Form>
      </div>
    );
  }
}
export default TodoForm;
