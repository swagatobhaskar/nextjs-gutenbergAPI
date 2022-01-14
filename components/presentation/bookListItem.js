import { Fragment } from "react";
import Image from 'next/image';
import Link from "next/link";

import Authors from './authors';
import Bookshelves from './bookshelves';

export default function BookListItem({book}) {

    return (
        <Fragment>
            <main className='flex flex-col md:flex-row relative'>
                {/* Hide image in small screen */}
                <figure className='my-1 md:ml-4 md:my-2 flex justify-center md:basis-1/4'>
                    <Image
                        src={book.formats['image/jpeg']}
                        height="190"
                        width="150"
                        objectFit="cover"
                        quality={100}
                        alt='cover'
                    />
                </figure>
                <div className="flex-col md:m-2 md:basis-11/12 md:px-5 px-1 md:py-2">
                    <Link
                        href={{
                            pathname: '/book/[id]',
                            query: { id: book.id },                            
                        }}
                    >
                        <a className='text-center md:text-left font-sans text text-base md:text-xl font-light'>
                            {book.title}
                        </a>
                    </Link>
                    <Authors authorList={book.authors} borderBottom={true} />
                    <h5 className="text-gray-500 text-sm md:font-normal">Bookshelves:</h5>
                    <Bookshelves shelveList={book.bookshelves} linear={false} />
                </div>
            </main>
        </Fragment>
    )
}