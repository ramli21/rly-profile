import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class User extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
      let $this = this;

      axios.get('/api/users').then(response => {
        $this.setState({
          data: response.data
        });
      }).catch(error => {
        console.log(error);
      })
  }

  handleDeleteAction(user) {
    var $this = this;

    axios.delete(`/api/users/${user.id}`).then(response => {
      console.log(response);

      const newState = $this.state.data.slice();
      newState.splice(newState.indexOf(user), 1);
      $this.setState({
        data: newState
      })
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h2>Users Listing</h2>
                <a href="javascript:void(0);" className="btn btn-secondary mb-2" data-toggle="modal" data-target="#createUser">Add New User</a>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((user, i) =>
                      <UserRow key={i} i={i} user={user} object={this} deleteAction={this.handleDeleteAction.bind(this, user)}/>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class UserRow extends Component {
  render() {
    return (
      <tr key={this.props.i}>
        <td>{this.props.user.id}</td>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.email}</td>
        <td>
          <a href='#' className="btn btn-primary">Edit</a> ||
          <a href='javascript:void(0);' className="btn btn-danger" onClick={this.props.deleteAction}>Delete</a>
        </td>
      </tr>
    )
  }
}

if (document.getElementById('user')) {
  ReactDOM.render(<User/>, document.getElementById('user'));
}
