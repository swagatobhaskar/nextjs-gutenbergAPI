
const Authors = ({authorList, borderBottom}) => {

    return (
        <div className="my-1 flex flex-row justify-around list-none">
            {authorList.map( author => (
                <li key={author.name} className=''>
                    {borderBottom ? (
                        <div className="flex flex-col border-b-2 border-blue-400/80">
                            <p className='font-sans font-light text-sm'>{author.name}</p>
                            <p className='font-sans font-light text-tiny text-center'>{author.birth_year} - {author.death_year}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col">
                            <p className='font-sans font-light text-sm'>{author.name}</p>
                            <p className='font-sans font-light text-tiny text-center'>{author.birth_year} - {author.death_year}</p>
                        </div>
                    )}
                </li>
            ))} 
        </div>
    )
}

export default Authors;