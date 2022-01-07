import { Fragment } from "react";
import Image from 'next/image';
import Link from "next/link";

import Authors from './authors';
import Bookshelves from './bookshelves';

export default function BookListItem({book}) {

    return (
        <Fragment>
            <main className='flex flex-row'>
                <figure className='ml-4 my-2 flex justify-center basis-1/4'>
                    <Image
                        src={book.formats['image/jpeg']}
                        height={190}
                        width={150}
                        quality={100}
                        alt='cover'
                    />
                </figure>
                <div className="flex-col m-2 basis-11/12 px-5 py-2">
                    <Link
                        href={{
                            pathname: '/book/[id]',
                            query: { id: book.id },                            
                        }}
                    >
                        <a className='text-left font-sans text-xl font-light'>
                            {book.title}
                        </a>
                    </Link>
                    <Authors authorList={book.authors} borderBottom={true} />
                    <h5 className="text-gray-500 font-normal">Bookshelves:</h5>
                    <Bookshelves shelveList={book.bookshelves} linear={false} />
                </div>
            </main>
        </Fragment>
    )
}