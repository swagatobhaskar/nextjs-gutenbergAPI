import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-2 md:p-5 flex justify-center border-b-1 md:border-b-2 border-sky-700 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="w-11/12 flex md:flex-row flex-col justify-between">
                <Link href='/' passHref as={'/'}>
                    <a className='flex items-center font-mono md:text-5xl text-xl font-sm text-header-blue antialiased drop-shadow-3xl'>
                        The Gutenberg Library
                    </a>
                </Link>
                <div className='flex items-center'>
                    <Link href="/about" passHref as={"/about"}>
                        <a className='px-1 md:py-1 md:px-2 text-sm font-light border-1 md:border-2 border-blue-700 hover:bg-blue-600 active:bg-blue-800'>
                            About
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    )
}