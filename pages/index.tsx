import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import BookList from '../components/container/bookList';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Gutenberg Library</title>
        <meta name="description" content="Books from the Gutenberg API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <BookList />
      </main>
    </div>
  )
}

export default Home
