import BookListItem from '../presentation/bookListItem';

export default function BookList(props) {
    let {bookList} = props;
    
    const Authors = ({book}) => {
        return (
            <div>
                {book.authors.map( author => (
                    <li key={author.name}>
                        <p>{author.name}</p>
                    </li>
                ))}
            </div>
        )}

    if (bookList) {
        return (
            <div className="mx-auto w-10/12 h-full">
                <ul>
                    {bookList.map(book => (
                        <li key={book.id} className='box-border h-12 w-3/4 bg-slate-500 mx-auto my-2'>
                            <div>
                                {book.title}
                            </div>
                            <Authors book={book} />
                        </li>
                    ))}
                </ul>
            </div>
        )}
    else {
        return(
            <main>
                <h2>Oops!</h2>
                <p>Something went wrong!</p>
            </main>
        )
    }
}