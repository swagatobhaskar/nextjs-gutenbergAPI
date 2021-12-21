import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-5 flex justify-center border-b-2 border-sky-700 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="w-11/12 flex flex-row justify-between">
                <h1 className='flex items-center font-mono text-5xl font-sm text-header-blue antialiased drop-shadow-3xl'>
                    The Gutenberg Library
                </h1>
                <div className='flex items-center'>
                    <button className='py-1 px-2 border-2 border-blue-700 hover:bg-blue-600'>
                        About
                    </button>
                </div>
            </div>
        </header>
    )
}