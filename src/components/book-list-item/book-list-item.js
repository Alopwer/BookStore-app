import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book }) => {
    const { title, subtitle, authors, price, coverImage } = book
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={coverImage} alt='cover' />
            </div>
            <div className='book-details'>
                <a href='#' className='book-title'>{title}</a>
                <div className='book-subtitle'>{subtitle}</div>
                <div className='book-author'>{authors}</div>
                <div className='book-price'>${price}</div>
                <button className='add-to-cart'>Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem;