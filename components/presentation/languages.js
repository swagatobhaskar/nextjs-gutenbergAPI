
export default function Languages({languages}) {
    return (
        <div className="">
            <h6 className="prop--title-secondary">Languages</h6>
            {languages.map(lang => (
                <li key={lang} className='list-none text-xs'>{lang}</li>
            ))}
        </div>
    )
}
