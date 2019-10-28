import React from 'react';
import { Link } from 'react-router-dom';
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, subtitle, authors, price, coverImage } = book
    return (
        <div className='book-list-item'>
            <div className='book-cover'>
                <img src={coverImage} alt='cover' />
            </div>
            <div className='book-details'>
                <Link to='/' className='book-title'>{title}</Link>
                <div className='book-subtitle'>{subtitle}</div>
                <div className='book-author'>{authors}</div>
                <div className='book-price'>${price}</div>
                <button 
                    onClick={onAddedToCart}
                    className='add-to-cart'>Add to cart</button>
            </div>
        </div>
    )
}

export default BookListItem;