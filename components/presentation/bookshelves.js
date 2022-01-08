
export default function Bookshelves({shelveList, linear}){

    if (!linear){
        return (
            <ul className='leading-tight grid grid-rows-4 grid-cols-2'>
                {shelveList.map(shelf => (
                    <li key={shelf} className="">
                        <p className="text-sm font-extralight">{shelf}</p>
                    </li>
                ))}           
            </ul>
        )
    } else if (linear) {
        return (
            <div>
                <h6 className="prop--title-secondary">Places in bookshelves</h6>
                <ul className='flex flex-row'>
                    {shelveList.map(shelf => (
                        <li key={shelf} className="text-xs font-light pl-2 first:pl-0 after:content-[','] after:last:content-['']">
                            {shelf}
                        </li>
                    ))}           
                </ul>
            </div>
        )
    }
}