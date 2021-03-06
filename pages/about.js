import Image from 'next/image';
import Head from 'next/head';
import { Fragment } from 'react';

export default function aboutPage() {

    return (
        <Fragment>
            <Head>
                <title>Gutenberg Library | About</title>
                <meta name="description" content="About Books from the Gutenberg API" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='w-2/3 h-auto m-auto'>
                <figure className='mx-auto my-auto w-max'>
                    <Image
                        src='/me.jpg'
                        height={280}
                        width={300}
                        alt="me"
                        loading='eager'
                        className='rounded-full overflow-visible'
                    />
                </figure>
                <p className='mx-auto w-4/5 indent-4 text-justify leading-relaxed tracking-wide font-mono text-sm font-thin text-blue-800'>
                    Hi, I&apos;m Swagato Bhaskar. A developer from India. Find the project here at &nbsp;
                    <a href='https://github.com/swagatobhaskar/nextjs-gutenbergAPI' target='_blank' rel="noreferrer" className='link--hover link--visited'>github</a>.
                </p>
            </main>
        </Fragment>
    )
}
