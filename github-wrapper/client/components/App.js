import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state={data:''};
    this.getData().then(res => {
      const repos = res.data;
      this.setState({data:repos});
      console.log(this.state);
    })
  }

  getData() {
    return axios.get(`http://localhost:8000/api/user`);
  }

  render() {
    return (
      <table class="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Url</th>
            <th>Language</th>
            <th>Forks</th>
            <th>Stars</th>
            <th>Watches</th>
            <th>open Issues</th>
            <th>default branch</th>
        </tr>
    </thead>
    <tbody>
    {
      this.state.data?this.state.data.map(el => {return <tr>
        <td>{el.name}</td>
        <td>{el.url}</td>
        <td>{el.language}</td>
        <td>{el.forks}</td>
        <td>{el.stargazers_count}</td>
        <td>{el.watchers_count}</td>
        <td>{el.open_issues_count}</td>
        <td>{el.default_branch}</td>
        </tr>}):''
      }
    </tbody>
</table>
    );
  }
}

export default App;
