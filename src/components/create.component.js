import React, { Component } from 'react';
import axiosConfig from '../config/axiosConfig';

const initialState = {
    author:'',
    title:'',
    genre:'',
    price:'',
    publish_date:'',
    description:''
};

export default class Create extends Component {
  constructor(props) {
    super(props);

    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = initialState;
  }
  onChangeAuthor(e) {
    this.setState({
        author: e.target.value
    });
  }
  onChangeTitle(e) {
    this.setState({
        title: e.target.value
    })  
  }
  onChangeGenre(e) {
    this.setState({
        genre: e.target.value
    })
  }
  onChangePrice(e) {
    this.setState({
        price: e.target.value
    })
  }
  onChangeDate(e) {
    // Format the date:
    const formattedDate = new Date(e.target.value).toISOString();
    this.setState({
        publish_date: formattedDate
    })
  }
  onChangeDescription(e) {
    this.setState({
        description: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        author: this.state.author,
        title: this.state.title,
        genre: this.state.genre,
        price: this.state.price,
        publish_date: this.state.publish_date,
        description: this.state.description

    };
    console.log('book to send: ', obj);

    axiosConfig.post('/books/', obj)
        .then(res => console.log(res.data));
    
    // Reset the state:
    this.setState(initialState);
  }
 
  render() {
    return (
        <div>
            <h3>Add New Book</h3>
            <form className="mt-4" onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label>Author:  </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={this.state.author}
                                onChange={this.onChangeAuthor}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label>Title: </label>
                            <input type="text" 
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label>Genre: </label>
                            <input type="text" 
                                className="form-control"
                                value={this.state.genre}
                                onChange={this.onChangeGenre}
                            />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label>Price: </label>
                            <input type="number" 
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChangePrice}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="form-group">
                            <label>Date: </label>
                            <input type="date" 
                                className="form-control"
                                value={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Description: </label>
                            <textarea 
                                rows="2"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>
                    </div>

                </div>
               
                <div className="form-group">
                    <input type="submit" value="create book" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}