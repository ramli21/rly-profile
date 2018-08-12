import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class User extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="card">
              <div class="card-body">
                <h2>Users Listing</h2>
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
                    <tr>
                      <td>1</td>
                      <td>Ramli</td>
                      <td>ramli@mail.com</td>
                      <td>
                        <a href='#' className="btn btn-primary">Edit</a>
                        <a href='#' className="btn btn-danger">Delete</a>
                      </td>
                    </tr>
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


ReactDOM.render(<User/>, document.getElementById('user'));
