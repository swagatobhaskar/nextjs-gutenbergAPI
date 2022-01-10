import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import axiosInstance from '../../utils/baseAxios';
import Authors from '../../components/presentation/authors';
import Bookshelves from '../../components/presentation/bookshelves';
import Translators from '../../components/presentation/translators';
import Formats from '../../components/presentation/formats';
import Languages from '../../components/presentation/languages';
import Subjects from '../../components/presentation/subjects';

export default function Book({book}) {
    
    const router = useRouter();

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div className='w-screen h-screen font-light text-gray-500'>Loading...</div>
    }

    return (
        <Fragment>
            <Head>
                <title>{book.title}</title>
                <meta name="description" content="Details for book" />
            </Head>
            <main className='md:mx-auto my-2 md:my-12 w-11/12 md:w-8/12 flex flex-col md:flex-row justify-between bg-red-100/70 rounded-md'>
                {/* Genral details */}
                <div className='basis-3/4 p-5'>
                    <h2 className='prop--title'>{book.title ? book.title : null}</h2>
                    <Authors authorList={book.authors} borderBottom={false} />
                    {/* Bookshelves */}
                    <Bookshelves shelveList={book.bookshelves} linear={true} />
                    <hr className='st--line'/>
                    {/* Languages and translators */}
                    <div className='mt-2 flex flex-row justify-between'>
                        <Languages languages={book.languages} />
                        <Translators translators={book.translators} />
                    </div>
                    <hr className='st--line'/>
                    {/* Subjects */}
                    <Subjects subjects={book.subjects} />
                    <hr className='st--line'/>
                    {/* Formats */}
                    <Formats formatObject={book.formats} />
                    <hr className='st--line'/>
                </div>
                {/* Cover image */}
                <div className='basis-1/4 p-5 flex flex-col justify-around'>
                    <div className=''>
                        <p
                            className='prop--title-secondary'
                        >
                            Download count: 
                            {/* '\00a0' is the unicode character for space */}
                            <span className="text-xs font-normal before:content-['\00a0'] text-black">{book.download_count}</span>
                        </p>
                        <p className='prop--title-secondary'>
                            Copyrighted: {book.copyright === false ? (
                                <span className='text-xs font-normal text-black'>No</span>
                            ):(
                                <span>{book.copyright}</span>
                            )}
                        </p>
                    </div>
                    <figure className='align-left '>
                        <Image
                            src={book.formats['image/jpeg']}
                            height={210}
                            width={180}
                            quality={100}
                            alt='cover'
                            className=''
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
    return { paths, fallback: true }
}

export async function getStaticProps({params}) {
    const res = await axiosInstance.get(`/${params.id}/`);
    const book = await res.data;

    return { props: { book } }
}