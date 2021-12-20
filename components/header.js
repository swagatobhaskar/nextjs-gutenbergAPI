import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-20 flex flex-row bg-slate-400">
            <div className="">
                <h1 >
                    The Gutenberg Library
                </h1>
                <h3>
                    About
                </h3>
            </div>
        </header>
    )
}