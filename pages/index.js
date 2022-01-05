import Head from 'next/head';
import {END} from 'redux-saga';
import { Fragment } from 'react';

import BookList from '../components/container/bookList';
import { fetchBookList } from '../redux/slices/bookListSlice';
import wrapper from '../redux/store';

export default function Home({booksToPresent}) {

  return (
    <Fragment>
      <Head>
        <title>Gutenberg Library</title>
        <meta name="description" content="Books from the Gutenberg API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto w-9/12">
        <BookList bookList={booksToPresent} />
      </main>
    </Fragment>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async ({preview}) => {
    store.dispatch(fetchBookList());
    store.dispatch(END);
    await store.sagaTask.toPromise();
    
    const apiData = store.getState();    
    const booksToPresent = apiData.bookList;

    return {
      props: {
        booksToPresent // https://gutendex.com/books/?page=2
      }
    };
});
