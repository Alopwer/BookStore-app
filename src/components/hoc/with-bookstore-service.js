import React, { useContext } from 'react';
import BookstoreServiceContext from '../bookstore-service-context/bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        const BookstoreServiceConsumer = useContext(BookstoreServiceContext);
        return (
            <Wrapped {...props} bookstoreService={BookstoreServiceConsumer} />
        )
    }
}

export default withBookstoreService;