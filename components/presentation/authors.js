
const Authors = ({authorList, borderBottom}) => {

    return (
        <div className="my-1 flex flex-row justify-around list-none">
            {authorList.map( author => (
                <li key={author.name} className=''>
                    {/* Using Tailwindcss feature to define classes as per condition */}
                    <div className={`flex flex-col ${borderBottom ? 'border-b-1 md:border-b-2 border-blue-400/80' : ''}`}>
                        <p className='font-sans font-light text-xs md:text-sm'>{author.name}</p>
                        <p className='font-sans font-light text-tiny text-center'>{author.birth_year} - {author.death_year}</p>
                    </div>
                </li>
            ))} 
        </div>
    )
}

export default Authors;