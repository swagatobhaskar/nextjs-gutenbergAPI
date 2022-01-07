
export default function Translators({translators}) {
    return(
        <div className="">
            {translators.length === 0 ? <p>None</p> : (
                <div>
                    {translators.map(lang => (
                        <li key={lang} className='list-none'>{lang}</li>
                    ))}
                </div>
            )}
        </div>
    )
}