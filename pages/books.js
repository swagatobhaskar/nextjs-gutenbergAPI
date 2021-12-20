import {useDispatch, useSelector} from 'react-redux';
import {END} from 'redux-saga';
import Head from 'next/head';
import Link from 'next/link';

import { fetchBookList } from '../redux/slices/bookListSlice';
import wrapper from '../redux/store';

export default function Books({booksToPresent}) {
    //const { results } = useSelector(state => state);
    console.log("booklist: ", booksToPresent);

    return (
        <h1 className='text-3xl font-bold underline'>
            Hello Book Lovers!
        </h1>
    )
}

export const getStaticProps = wrapper.getStaticProps(store => async ({preview}) => {
    store.dispatch(fetchBookList());
    store.dispatch(END);
    await store.sagaTask.toPromise();

    const data = store.getState();
    const booksToPresent = data.bookList.results;
    return { props: {booksToPresent}, };
});