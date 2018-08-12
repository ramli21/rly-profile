import React, { Component } from 'react';

export default class Form extends Component {

  constructor() {
    super();

    this.userName = React.createRef();
    this.state = {};
  }
  componentWillMount() {
    const {fields} = this.props;

    this.setState(fields);
  }

  clearStates() {
    this.setState({
      name: '',
      email: '',
      password: ''
    })
  }

  handleFieldsChange(key, e) {
    this.setState({[key]: e.target.value});
  }

  hanedleSubmit(e) {
    const {action, id} = this.props;

    e.preventDefault();
    switch (action) {
      case 'edit':
        axios.put(`/api/users/${id}`, this.state).then( response => {
          console.log("Success to update User", response);
        }).then(error => {
          console.log(error);
        });
        break;
      default:
        axios.post('/api/users', this.state).then( response => {
          console.log("Success to Build a new User", response);
          this.clearStates();
          this.userName.current.focus();
        }).then(error => {
          console.log(error);
        });

    }
  }

  render() {
    const {onsubmit, fields} = this.props;
    return (
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
    )
  }
}
