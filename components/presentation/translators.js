
export default function Translators({translators}) {
    return(
        <div className="mr-12">
            <h6 className="prop--title-secondary">Translators</h6>
            {translators.length === 0 ? <p className="text-xs">None</p> : (
                <div>
                    {translators.map(lang => (
                        <li key={lang} className='text-xs list-none'>{lang}</li>
                    ))}
                </div>
            )}
        </div>
    )
}