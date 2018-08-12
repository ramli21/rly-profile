import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Edit extends Component {
  constructor() {
    super();
    this.userName = React.createRef();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleFieldsChange(key, e) {
    this.setState({[key]: e.target.value});
  }

  clearStates() {
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }

  hanedleSubmit(e) {
    e.preventDefault();

    axios.post('/api/users', this.state).then( response => {
      console.log("Success to Build a new User", response);
      this.clearStates();
      this.userName.current.focus();
    }).then(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="modal fade" id="createUser" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{`Create a new user`}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.hanedleSubmit.bind(this)}>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text"
                    className="form-control"
                    id="username"
                    focus="true"
                    ref={this.userName}
                    placeholder="Username"
                    value={this.state.name}
                    onChange={this.handleFieldsChange.bind(this, 'name')} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleFieldsChange.bind(this, 'email')} />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleFieldsChange.bind(this, 'password')} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

if (document.getElementById('create')) {
  ReactDOM.render(<Create/>, document.getElementById('create'));
}
