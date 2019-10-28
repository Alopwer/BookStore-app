import React, { useEffect } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import withBookstoreService from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import compose from '../../utils';
import './book-list.css';

const BookListContainer = ({ fetchBooks, books, loading, error, onAddedToCart }) => {
    useEffect(() => {
        fetchBooks()
    }, [])

    return error ? <ErrorIndicator /> : loading ? <Spinner /> : <BookList books={books} onAddedToCart={onAddedToCart} />
}

const BookList = ({ books, onAddedToCart }) => {
    return (
        <ul className='book-list'>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                                onAddedToCart={() => onAddedToCart(book.id)}
                                book={book} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return {
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
        fetchBooks: fetchBooks(bookstoreService, dispatch)
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);