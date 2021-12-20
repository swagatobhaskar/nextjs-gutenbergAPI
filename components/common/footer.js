import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='w-full h-14 m-auto absolute bottom-0 flex items-center border-t-2 border-sky-700 bg-gradient-to-r from-cyan-500 to-blue-500'>
            <h4 className='text-lg m-auto w-1/3 flex justify-center'>
                © Swagato Bhaskar for The Gutenberg Library
            </h4>
        </footer>
    )
}