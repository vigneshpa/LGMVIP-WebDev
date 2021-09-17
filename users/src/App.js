import { Component } from 'react';
import './App.css';

const loading = (
  <div className="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    };
  }
  async getUsers() {
    this.setState({ users: [], loading: true });
    const users = (await (await fetch('https://reqres.in/api/users?page=1')).json()).data;
    this.setState({ users, loading: false });
  }
  render() {
    return (
      <div className="App">
        <div className="nav">
          <button onClick={() => this.getUsers()}>Get Users</button>
        </div>
        {this.state.loading === true && <div className="loading">{loading}</div>}
        <div className="users">
          {this.state.users.map(user => {
            return (
              <div key={user.id}>
                <div className="user_avatar" width="128" height="128">
                  <div>
                    <img src={user.avatar}></img>
                  </div>
                </div>
                <div className="user_details">
                  <div className="first_name">{user.first_name}</div>
                  <div className="last_name">{user.last_name}</div>
                  <div className="user_email">{user.email}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
