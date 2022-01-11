import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPaginatedBookList } from '../../redux/slices/bookListSlice';
import BookListItem from '../presentation/bookListItem';
import Pagination from '../presentation/pagination';

export default function BookList({bookList}) {

    const newPaginatedBookList = useSelector( state => state.bookList );
    
    const [ renderBookListData, setRenderBookListData ] = useState(bookList);

    const dispatch = useDispatch();

    useEffect(() => {
        if(newPaginatedBookList.results !== null){
            setRenderBookListData(newPaginatedBookList);
        }
    },[newPaginatedBookList])

    const handleNextPageClick = () => {
        dispatch(fetchPaginatedBookList(renderBookListData.next));
    }

    const handlePreviousPageClick = () => {
        dispatch(fetchPaginatedBookList(renderBookListData.previous));
    }

    if (renderBookListData.results) {
        return (
            <Fragment>
                {renderBookListData.results.map(book => (
                    <li
                        key={book.id}
                        className='h-min md:h-52 md:w-3/4 border-1 border-slate-400 rounded-sm md:rounded-md mx-auto my-4 md:my-5 drop-shadow-md md:drop-shadow-3xl shadow-lg list-none'
                    >
                       <BookListItem book={book} /> 
                    </li>
                ))}
                <Pagination
                    previousPageUrl={renderBookListData.previous}
                    nextPageUrl={renderBookListData.next}
                    nextPageClick={handleNextPageClick}
                    previousPageClick={handlePreviousPageClick}
                />
            </Fragment>
        )
    } else {
        return (
            <main className='mx-auto my-20 w-3/5 h-min border-0 p-5 rounded-sm border-amber-800 shadow-lg shadow-amber-700/20 bg-orange-50 flex flex-col items-center'>
                <h2 className='text-amber-600 font-semibold text-2xl'>Oops...</h2>
                <p className='text-amber-700 font-semibold text-lg'>Something went wrong!</p>
            </main>
        )
    }
}
