import Head from 'next/head';
import Link from 'next/link';
import {END} from 'redux-saga';
import { useState, useEffect } from 'react';

import BookList from '../components/container/bookList';
import { fetchBookList, fetchPaginatedBookList } from '../redux/slices/bookListSlice';
import wrapper from '../redux/store';

export default function Home({booksToPresent, nextPageUrl, previousPageUrl}) {

  const handleNextPageClick = () => {
    console.log("Button clicked");
    fetchPaginatedBookList(nextPageUrl);
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
