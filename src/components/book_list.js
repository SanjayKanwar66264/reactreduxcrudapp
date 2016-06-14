import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { selectBook } from '../actions/index'
import  { bindActionCreators } from 'redux'


class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item"
                    onClick={()=> this.props.selectBook(book)}
                    key={book.title}>
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul class="list-group col-sm-4">
                    {this.renderList()}
            </ul>
        )
    }
}


//Whatever is returned will show up as props inside of BookList
function mapToProps(state) {
    return {
        books: state.books
    }

}
function mapDispatchToProps(dispatch){
    //Whenever select book is called result must be pass to all our reducers
    return bindActionCreators({selectBook:selectBook},dispatch)
}

export default connect(mapToProps,mapDispatchToProps)(BookList)