export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'prod',
            subtitle: 'sub',
            authors: 'me',
            price: 20,
            coverImage: 'https://itbook.store/img/books/9781491954249.png'
        },
        {
            id: 2,
            title: 'prod',
            subtitle: 'sub',
            authors: 'me',
            price: 20,
            coverImage: 'https://itbook.store/img/books/9781491954249.png'
        },
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700)
        })
    }
}