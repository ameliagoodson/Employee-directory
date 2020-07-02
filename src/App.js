import React from "react";
import Navbar from "./components/Navbar/index";
import List from "./components/List/List";
import Searchbar from "./components/Search/search";

class App extends React.Component {
  state = {
    employees: [
      {
        name: "Amelia Goodson",
        phone: "0478097895",
        email: "ameliajanegoodson@gmail.com",
        DOB: 25021989,
      },
      {
        name: "Isabelle Goodson",
        phone: "0473007895",
        email: "bellegoodson@gmail.com",
        DOB: 25021993,
      },
      {
        name: "Lauren O'Reilly",
        phone: "0448023895",
        email: "laurenoreilly@gmail.com",
        DOB: 19051991,
      },
      {
        name: "Mark Dugger",
        phone: "0445425745",
        email: "mdugger@gmail.com",
        DOB: 12121961,
      },
      {
        name: "Judy Farrah",
        phone: "0412154687",
        email: "judyfarrah@gmail.com",
        DOB: 2909544,
      },
    ],
  };

  handleSort = () => {
    console.log("test");
    const sortedEmployees = this.state.employees.sort(function (
      employee1,
      employee2
    ) {
      if (employee1.name > employee2.name) {
        return employee1;
      } else {
        return employee2;
      }
    });
    this.setState({ employees: sortedEmployees });
  };
  render() {
    return (
      <div>
        <Navbar />;
        <Searchbar />
        <List employees={this.state.employees} handleSort={this.handleSort} />
      </div>
    );
  }
}

export default App;
