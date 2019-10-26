import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    return (
        <BookList books={[{ id: 1, title: 'title', author: 'author' }]} />
    )
}

export default HomePage;