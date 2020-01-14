import React, { Component } from 'react';
import TableRow from './TableRow';
// import axiosConfig from '../config/axiosConfig'; // To be used when real data can be loaded..
import axios from 'axios';

export default class Index extends Component {

  constructor(props) {
        super(props);
        this.state = {
            books: [],
            query: ''
        };
    }
    componentDidMount(){
        // Get all books. Since there's not a lot of them, i get all and then filter them with search.
        axios.get('/books')
        .then(response => {
            console.log('response: ', response);
            this.setState({ books: response.data.books });
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    handleInputChange = () => {
        this.setState({
          query: this.search.value
        })
      }

    tabRow = () => {

        let filteredBooks = []; // If I had more time i would make a filtered list of books instead of iterating through all the books in this function

        return this.state.books.map((object, i) => {
            // If there's a search query, filter:
            if (this.state.query.length) {
                let bookTitle = object.title;
                let searchQuery = this.state.query;

                // If the book title contains the search query - return it:
                if(bookTitle.toLowerCase().includes(searchQuery.toLowerCase())) {
                    return <TableRow obj={object} key={i} />;
                }
            } else {
                //If there's no search query - return all books:
                return <TableRow obj={object} key={i} />;
            }
        });
    }

    render() {
      return (
        <div>
            <h3>Book List</h3>
            <form className="mt-4">
                <input
                    className="form-control"
                    placeholder="Search for book title..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
            </form>
          <table className="table table-striped mt-4">
            <thead>
              <tr>
                <th>Author</th>
                <th>Title</th>
                <th>Genre</th>
                <th>Price</th>
                <th>Publish date</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }