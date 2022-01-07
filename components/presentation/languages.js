
export default function Languages({languages}) {
    return (
        <div className="">
            {languages.map(lang => (
                <li key={lang} className='list-none'>{lang}</li>
            ))}
        </div>
    )
}
