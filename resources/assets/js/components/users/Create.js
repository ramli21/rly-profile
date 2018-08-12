import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Form from './shared/Form';

export default class Create extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: ''
    }
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
            <Form fields={this.state} id="" />
          </div>
        </div>
      </div>
    )
  }
}

if (document.getElementById('create')) {
  ReactDOM.render(<Create/>, document.getElementById('create'));
}
