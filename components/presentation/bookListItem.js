import { Fragment } from "react";
import Image from 'next/image';

import Authors from './authors';

export default function BookListItem({book}) {

    return (
        <Fragment>
            <main className='flex flex-row'>
                <figure className='ml-4 mt-2 basis-1/4'>
                    <Image
                        src={book.formats['image/jpeg']}
                        height={190}
                        width={150}
                        quality={100}
                        alt='cover'
                    />
                </figure>
                <div className='basis-11/12'>
                    <h4 className='px-5 text-left font-sans text-xl font-light'>
                        {book.title}
                    </h4>
                    <Authors book={book} />
                </div>
                <div className=''>
                    <p className=''>
                        {book.bookshelves}
                    </p>
                </div>
            </main>
        </Fragment>
    )
}