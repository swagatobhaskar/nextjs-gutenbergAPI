import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import axiosInstance from '../../utils/baseAxios';
import Authors from '../../components/presentation/authors';
import Bookshelves from '../../components/presentation/bookshelves';

export default function Book({book}) {
    return (
        <Fragment>
            <Head>
                <title>{book.title}</title>
                <meta name="description" content="Details for book" />
            </Head>
            <main className='flex flex-row mx-auto my-12 w-8/12'>
                {/* Genral details */}
                <div className='basis-7/12'>
                    <h3>{book.title}</h3>
                    {/* Authors */}
                    <Authors authorList={book.authors} borderBottom={false} />
                    {/* Bookshelves */}
                    <div className=''>
                        <h6>Places in bookshelves</h6>
                        <Bookshelves shelveList={book.bookshelves} linear={true} />
                    </div>
                    <hr className='border-1 border-cyan-400/50'/>
                    {/* Languages and translators */}
                    <div className='mt-2 flex flex-row justify-between'>
                        {/* Languages */}
                        <div>
                            <h6>Languages</h6>
                            {book.languages.map(lang => (
                                <li key={lang} className='list-none'>{lang}</li>
                            ))}
                        </div>
                        {/* Translators */}
                        <div>
                            <h6>Translators</h6>
                            {book.translators.length === 0 ? <p>None</p> : (
                                <div>
                                    {book.translators.map(lang => (
                                        <li key={lang} className='list-none'>{lang}</li>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <hr className='border-1 border-cyan-400/50'/>
                    {/* Subjects */}
                    <div className=''>
                        {book.subjects.map(sub => (
                            <li key={sub} className=''>{sub}</li>
                        ))}
                    </div>
                    <hr className='border-1 border-cyan-400/50'/>
                    {/* Formats */}
                    <div className='mt-2'>
                        <h6 className=''>Links</h6>
                        {/* Since formats is coming as Object not array, used Object.entries().map() */}
                        {Object.entries(book.formats).map(([key, value]) => (
                            <a
                                key={key}
                                href={value}
                                className=''
                            >
                                {key}
                            </a>
                        ))}
                    </div>
                </div>
                {/* Cover image */}
                <div className=''>
                    <p>Download count: {book.download_count}</p>
                    <p>Copyrighted: {book.copyright}</p>
                    <figure className=''>
                        <Image
                            src={book.formats['image/jpeg']}
                            height={190}
                            width={150}
                            quality={100}
                            alt='cover'
                        />
                    </figure>
                </div>
            </main>
        </Fragment>
    )
}

export async function getStaticPaths() {
    /**
    * There are 2095 pages in the end-point https://gutendex.com/books/?page={page_no}
    * And a total of 67012 books.
    * Querying only for the first page.
    */

    /*
    let bookPages = [];
    for (let pageNo = 1; pageNo=2; pageNo ++) {
        const res = await axiosInstance.get(`/?page=${pageNo}`);
        const listResultsArray = await res.data.results;
        bookPages.push(listResultsArray);
    }
    */

    const res = await axiosInstance.get('/?page=1');
    const resultsArray = await res.data.results;

    const paths = resultsArray.map((book) => ({
        params: { id: book.id.toString() },
    }))
    // { fallback: false } means other routes should 404.   
    return { paths, fallback: false }
}

export async function getStaticProps({params}) {
    const res = await axiosInstance.get(`/${params.id}/`);
    const book = await res.data;

    return { props: { book } }
}