import Head from 'next/head';
import Link from 'next/link';
import {END} from 'redux-saga';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import BookList from '../components/container/bookList';
import { fetchBookList, fetchPaginatedBookList } from '../redux/slices/bookListSlice';
import wrapper from '../redux/store';

export default function Home({booksToPresent, nextPageUrl, previousPageUrl}) {

  // use useSelector to take the new book list only
  // use useEffect to detect change in nextPageUrl and re-render the list

  const dispatch = useDispatch();

  const handleNextPageClick = () => {
    console.log("Button clicked");
    dispatch(fetchPaginatedBookList(nextPageUrl));
  }

  return (
    <div className="">
      <Head>
        <title>Gutenberg Library</title>
        <meta name="description" content="Books from the Gutenberg API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <BookList bookList={booksToPresent} />
      </main>
      <span className=''>
        {previousPageUrl ? <a href={previousPageUrl}>Previous</a> : null}
        <button onClick={() => handleNextPageClick()}>Next</button>
      </span>
    </div>
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
