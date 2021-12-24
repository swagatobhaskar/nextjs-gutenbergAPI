import BookListItem from '../presentation/bookListItem';
import Image from 'next/image';

const Authors = ({book}) => {
    return (
        <div>
            {book.authors.map( author => (
                <p key={author.name}>{author.name}</p>
            ))}
        </div>
    )
}

export default function BookList(props) {
    let {bookList} = props;
    
    if (bookList) {
        return (
            <div className="mx-auto w-10/12 ">
                <ul>
                    {bookList.map(book => (
                        <li key={book.id} className='h-52 w-3/4 border-1 border-black rounded-md mx-auto my-2 drop-shadow-md'>
                            <figure className='ml-4 mt-2'>
                                <Image
                                    src={book.formats['image/jpeg']}
                                    height={190}
                                    width={150}
                                    quality={100}
                                    alt='cover'
                                />
                            </figure>
                            <h4 className='text-center'>
                                {book.title}
                            </h4>
                            <span>
                                <Authors book={book} />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    else {
        return (
            <main>
                <h2>Oops!</h2>
                <p>Something went wrong!</p>
            </main>
        )
    }
}