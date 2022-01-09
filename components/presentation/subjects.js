
export default function Subjects({subjects}) {
    return (
        <div className="mt-2 list-none">
            <h5 className="prop--title-secondary">Subjects</h5>
            {subjects.map(sub => (
                <li key={sub} className='text-xs font-light md:font-normal'>{sub}</li>
            ))}
        </div>
    )
}
