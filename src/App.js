import React from 'react';
import './App.css';

import List from './components/List.js';
import WithLoading from './components/withLoading.js';
const ListWithLoading = WithLoading(List);
class App extends React.Component {
  state = {
loading:false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/hacktivist123/repos`)
      .then((json) => json.json())
      .then((repos) => {
        this.setState({ loading: false, repos: repos });
      });
  }
  render() {
     return (
      <ListWithLoading
        isLoading={this.state.loading}
        repos={this.state.repos}
      />
    // <List repos={this.state.repos}/>       // This will fetch entire data without loading
    );
    
  }
}
export default App;
