
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
            <ul className='flex flex-row'>
                {shelveList.map(shelf => (
                    <li key={shelf} className="text-sm font-extralight pl-2 first:pl-0 after:content-[','] after:last:content-['']">
                        {shelf}
                    </li>
                ))}           
            </ul>
        )
    }
}