import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='w-full h-auto m-auto absolute bottom-0 flex items-center border-t-2 border-sky-700 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className='m-auto w-1/4 flex justify-center flex-col'>
                <h1 className='text-md'>
                    The Gutenberg Library
                </h1>
                <h1 className='text-md'>
                    © Swagato Bhaskar, 2021 - 2022
                </h1>
            </div>
        </footer>
    )
}