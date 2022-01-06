import { Fragment } from 'react';
import axiosInstance from '../../utils/baseAxios';

export default function Book({book}) {
    console.log(book);
    return (
        <Fragment>
            Hi
        </Fragment>
    )
}

export async function getStaticPaths() {
    /**
    * There are 2095 pages in the end-point https://gutendex.com/books/?page={page_no}
    * And a total of 67012 books.
    * Querying till 1000.
    */
    let bookPages = [];
    for (let pageNo = 1; pageNo<1000; pageNo ++) {
        const res = await axiosInstance.get(`/?page=${pageNo}`);
        const listResultsArray = await res.data.results;
        bookPages.push(listResultsArray);
    }
    console.log(bookPages);
    const paths = bookPages.map((book) => ({
        params: { id: book.id },
    }))
    // { fallback: false } means other routes should 404.   
    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const res = await axiosInstance.get(`/${params.id}/`);
    const book = await res.data;

    return { props: { book } }
}