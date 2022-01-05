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

    const [ renderBookListData, setRenderBookListData ] = useState(newPaginatedBookList || booksToPresent);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     setRenderBookListData(newPaginatedBookList);
    // }, [newPaginatedBookList])

    const handleNextPageClick = () => {
        dispatch(fetchPaginatedBookList(nextPageUrl));
    }

    if (newPaginatedBookList) {
        return (
            <Fragment>
                <div className="">
                    {newPaginatedBookList.results.map(book => (
                        <li key={book.id} className='h-52 w-3/4 border-1 border-slate-400 rounded-md mx-auto my-5 drop-shadow-3xl shadow-lg list-none'>
                           <BookListItem book={book} /> 
                        </li>
                    ))}
                </div>
                <Pagination
                    previousPageUrl={newPaginatedBookList.previous}
                    nextPageUrl={newPaginatedBookList.next}
                    nextPageClick={handleNextPageClick}
                    // add previousPageClick later
                />
            </Fragment>
        )}
    else {
        return (
            <main className='m-auto my-16 w-2/5 border-1 p-5 rounded-sm border-amber-800 shadow-xl shadow-amber-700/20 bg-orange-50 flex flex-col items-center'>
                <h2 className='text-amber-600 font-semibold text-2xl'>Oops...</h2>
                <p className='text-amber-700 font-semibold text-lg'>Something went wrong!</p>
            </main>
        )
    }
}