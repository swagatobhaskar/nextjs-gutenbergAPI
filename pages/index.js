import Head from 'next/head';
import Link from 'next/link';
import {END} from 'redux-saga';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BookList from '../components/container/bookList';
import { fetchBookList, fetchPaginatedBookList } from '../redux/slices/bookListSlice';
import Pagination from '../components/presentation/pagination';
import wrapper from '../redux/store';

export default function Home({booksToPresent, nextPageUrl, previousPageUrl}) {

  const [ renderBookListData, setRenderBookListData ] = useState(booksToPresent);
  const dispatch = useDispatch();
  
  const newPaginatedBookList = useSelector( state => state.bookList );
  console.log("useSelector: ", newPaginatedBookList);

  // gotta use newPaginatedBookList into useEffect somehow, to refresh page with new data
  useEffect(() => {
    setRenderBookListData(booksToPresent);
  }, [nextPageUrl, booksToPresent])

  const handleNextPageClick = () => {
    dispatch(fetchPaginatedBookList(nextPageUrl));
  }

  return (
    <Fragment>
      <Head>
        <title>Gutenberg Library</title>
        <meta name="description" content="Books from the Gutenberg API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto w-9/12">
        <BookList bookList={renderBookListData} />
      </main>
      <Pagination
        previousPageUrl={previousPageUrl}
        nextPageUrl={nextPageUrl}
        nextPageClick={handleNextPageClick}
        // add previousPageClick later
      />
    </Fragment>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async ({preview}) => {
    store.dispatch(fetchBookList());
    store.dispatch(END);
    await store.sagaTask.toPromise();

    const data = store.getState();
    
    const booksToPresent = data.bookList.results;
    const nextPageUrl = data.bookList.next;
    const previousPageUrl = data.bookList.previous;

    return {
      props: {
        booksToPresent,
        nextPageUrl,  // https://gutendex.com/books/?page=2
        previousPageUrl
      }
    };
});
