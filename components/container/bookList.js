import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPaginatedBookList } from '../../redux/slices/bookListSlice';
import BookListItem from '../presentation/bookListItem';
import Pagination from '../presentation/pagination';

export default function BookList({bookList}) {
    console.log("BOOKLIST::", bookList);

    const newPaginatedBookList = useSelector( state => state.bookList );
    console.log("useSelector: ", newPaginatedBookList);

    const [ renderBookListData, setRenderBookListData ] = useState(newPaginatedBookList);
    const [ nextPageUrl, setNextPageUrl ] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        setRenderBookListData(newPaginatedBookList);
    }, [newPaginatedBookList])

    if (renderBookListData.next !== null){
        setNextPageUrl(renderBookListData.next);
    } else {
        setNextPageUrl(bookList.next);
    }

    const handleNextPageClick = (nextPageUrl) => {
        console.log("URL:",nextPageUrl);
        dispatch(fetchPaginatedBookList(nextPageUrl));
    }

    if (renderBookListData.results) {
        return (
            <Fragment>
                <div className="">
                    {renderBookListData.results.map(book => (
                        <li key={book.id} className='h-52 w-3/4 border-1 border-slate-400 rounded-md mx-auto my-5 drop-shadow-3xl shadow-lg list-none'>
                           <BookListItem book={book} /> 
                        </li>
                    ))}
                </div>
                <Pagination
                    previousPageUrl={renderBookListData.previous}
                    nextPageUrl={renderBookListData.next}
                    nextPageClick={handleNextPageClick}
                    // add previousPageClick later
                />
            </Fragment>
        )
    } else if (bookList) {
        return (
            <Fragment>
                <div className="">
                    {bookList.results.map(book => (
                        <li key={book.id} className='h-52 w-3/4 border-1 border-slate-400 rounded-md mx-auto my-5 drop-shadow-3xl shadow-lg list-none'>
                           <BookListItem book={book} /> 
                        </li>
                    ))}
                </div>
                <Pagination
                    previousPageUrl={bookList.previous}
                    nextPageUrl={bookList.next}
                    nextPageClick={handleNextPageClick}
                    // add previousPageClick later
                />
            </Fragment>
        )
    } else {
        return (
            <main className='mx-auto my-20 w-3/5 h-min border-1 p-5 rounded-sm border-amber-800 shadow-xl shadow-amber-700/20 bg-orange-50 flex flex-col items-center'>
                <h2 className='text-amber-600 font-semibold text-2xl'>Oops...</h2>
                <p className='text-amber-700 font-semibold text-lg'>Something went wrong!</p>
            </main>
        )
    }
}