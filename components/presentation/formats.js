import Link from "next/link";

export default function Formats({formatObject}) {
    return (
        <div className="mt-2">
            <h6 className='prop--title-secondary'>Links</h6>
            {/* Since formats is coming as Object not array, used Object.entries().map() */}
            {Object.entries(formatObject).map(([format, link]) => (
                <li key={format} className='text-xs list-none '>
                    <Link passHref href={link} className=''>
                        {/* regex to replace 'file-type/' string from Object proerty with '' */}
                        <a className="link--hover">{format.replace(/[a-z]+\//i, '')}</a>
                    </Link>
                </li>
            ))}
        </div>
    )
}