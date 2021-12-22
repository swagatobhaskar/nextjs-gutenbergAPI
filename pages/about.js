import Image from 'next/image';
import Head from 'next/head';
import { getPlaiceholder } from "plaiceholder";

export default async function aboutPage() {

    const { base64, img } = await getPlaiceholder("/swagato.jpg");
    const imageProps= { ...img, blurDataURL: base64};

    return (
        <div>
            <Head>
                <title>Gutenberg Library | About</title>
                <meta name="description" content="About Books from the Gutenberg API" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='w-2/3 m-auto'>
                <div className='ml-10 mt-5'>
                    <Image
                        {...imageProps}
                        src='/swagato.jpg'
                        height="250"
                        width="250"
                        alt="swagato"
                        loading='eager'
                        placeholder="blur"
                        className='rounded-full'
                    />
                </div>
            </main>
        </div>
    )
}
