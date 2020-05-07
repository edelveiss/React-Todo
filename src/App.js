import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
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

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
  {
    task: "Shopping",
    id: 1528817084359,
    completed: false,
  },
  {
    task: "Fixing the door",
    id: 1528817084360,
    completed: false,
  },
  {
    task: "Meeting with friends",
    id: 1528817084361,
    completed: false,
  },
  {
    task: "Home Work Project",
    id: 1528817084362,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
      searchTerm: "",
      searchResults: todoData,
    };
  }

  toggleTodosDone = (itemId) => {
    console.log("bk: index.js: App: toggletodosDone: itemId: ", itemId);
    this.setState({
      todos: this.state.todos.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  addTodo = (itemName) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: itemName,
          completed: false,
          id: Date.now(),
        },
      ],
    });
  };

  clearTodosDone = () => {
    console.log("bk: index.js: App: clearTodosDone");
    this.setState({
      todos: this.state.todos.filter((item) => {
        return !item.completed;
      }),
    });
  };
  // componentDidMount() {
  //   this.setState({ searchResults: this.state.todos, searchTerm: "" });

  //   console.log("i am cdm");
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("i am cdu", prevState.searchTerm, this.state.searchTerm);
  //   if (prevState.searchTerm !== this.state.searchTerm) {
  //     let results = this.state.todos.filter((item) => {
  //       return item.task
  //         .toLowerCase()
  //         .includes(this.state.searchTerm.toLowerCase());
  //     });
  //     this.setState({ searchResults: results });
  //   }
  // }

  handleFormChange = (event) => {
    this.setState({ searchTerm: event.target.value });
    console.log("searchTerm", this.state.searchTerm);
  };

  render() {
    console.log("i am render");
    console.log("searchResults", this.state.searchResults);
    return (
      <div>
        <Navbar
          className="bg-dark justify-content-around"
          style={{ height: "5rem" }}
        >
          <TodoForm addTodo={this.addTodo} />

          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={this.handleFormChange}
            />
          </Form>
        </Navbar>

        <TodoList
          //searchResults={this.state.searchResults}
          todos={this.state.todos}
          searchTerm={this.state.searchTerm}
          toggleTodosDone={this.toggleTodosDone}
          clearTodosDone={this.clearTodosDone}
        />
      </div>
    );
  }
}

export default App;

//onChange={handleSearchChange}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: todoData,
//     };
//   }

//   toggleTodosDone = (itemId) => {
//     console.log("bk: index.js: App: toggletodosDone: itemId: ", itemId);
//     this.setState({
//       todos: this.state.todos.map((item) => {
//         if (item.id === itemId) {
//           return {
//             ...item,
//             completed: !item.completed,
//           };
//         }
//         return item;
//       }),
//     });
//   };

//   addTodo = (itemName) => {
//     this.setState({
//       todos: [
//         ...this.state.todos,
//         {
//           task: itemName,
//           completed: false,
//           id: Date.now(),
//         },
//       ],
//     });
//   };

//   clearTodosDone = () => {
//     console.log("bk: index.js: App: clearTodosDone");
//     this.setState({
//       todos: this.state.todos.filter((item) => {
//         return !item.completed;
//       }),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Navbar
//           className="bg-dark justify-content-around"
//           style={{ height: "5rem" }}
//         >
//           <TodoForm addTodo={this.addTodo} />

//           <Form inline>
//             <FormControl
//               type="text"
//               placeholder="Search"
//               className=" mr-sm-2"
//             />
//             <Button type="submit">Submit</Button>
//           </Form>
//         </Navbar>

//         <TodoList
//           todos={this.state.todos}
//           toggleTodosDone={this.toggleTodosDone}
//           clearTodosDone={this.clearTodosDone}
//         />
//       </div>
//     );
//   }
// }
