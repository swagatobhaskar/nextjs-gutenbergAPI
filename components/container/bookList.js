import BookListItem from '../presentation/bookListItem';
import Image from 'next/image';
import Authors from '../presentation/authors';

export default function BookList(props) {
    let {bookList} = props;
    
    if (bookList) {
        return (
            <div className="mx-auto w-9/12">
                {bookList.map(book => (
                    <li key={book.id} className='h-52 w-3/4 border-1 border-slate-400 rounded-md mx-auto my-5 drop-shadow-3xl shadow-lg list-none'>
                        <main className='flex flex-row'>
                            <figure className='ml-4 mt-2 basis-1/4'>
                                <Image
                                    src={book.formats['image/jpeg']}
                                    height={190}
                                    width={150}
                                    quality={100}
                                    alt='cover'
                               />
                            </figure>
                            <div className='basis-11/12'>
                                <h4 className='px-5 text-left font-sans text-xl font-light'>
                                    {book.title}
                                </h4>
                                <Authors book={book} />
                            </div>
                        </main>
                    </li>
                ))}
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