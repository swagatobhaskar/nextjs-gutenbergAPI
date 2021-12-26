
const Authors = ({book}) => {
    return (
        <div>
            {book.authors.map( author => (
                <div key={author.name} className='flex flex-row justify-around'>
                    <p className='font-sans font-light text-sm'>{author.name}</p>
                    <p className='font-sans font-light text-tiny text-center'>{author.birth_year} - {author.death_year}</p>
                </div>
            ))} 
        </div>
    )
}

export default Authors;