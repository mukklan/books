import React, { Component } from 'react';
import axiosConfig from '../config/axiosConfig';
import Moment from 'react-moment';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axiosConfig.get('/books/'+this.props.obj.id)
            .then(console.log('Delete'))
            .catch(err => console.log(err))
    }
  render() {

    return (
        <tr>
          <td>
            {this.props.obj.author}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.genre}
          </td>
          <td>
            {this.props.obj.price}
          </td>
          <td>
            <Moment format="DD MMM YYYY">
                 {this.props.obj.publish_date}
            </Moment>
          </td>
          <td>
            {this.props.obj.description}
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;