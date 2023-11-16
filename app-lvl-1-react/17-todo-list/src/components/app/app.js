import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import styled from 'styled-components';
import './app.css';
const Wrapper = styled.div`
  width: 600px;
  background: black;
  color: white;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'bob',
          salary: 1434,
          increase: false,
          id: 1,
          rise: false,
        },
        {
          name: 'alex',
          salary: 1345,
          increase: true,
          id: 2,
          rise: false,
        },
        {
          name: 'void',
          salary: 1785,
          increase: false,
          id: 3,
          rise: false,
        },
      ],
    };
  }

  onDelete = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((element) => element.id == id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // const newArr = [...before, ...after];

      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  onAdd = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    console.log(`Increase ${id}`);
  };
  onToggleRise = (id) => {
    console.log(`Increase ${id}`);
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <Wrapper>afafa</Wrapper>
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.onDelete}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
