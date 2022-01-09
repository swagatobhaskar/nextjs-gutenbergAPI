
export default function Bookshelves({shelveList, linear}){

    return (
        <div className="">
            {linear ? (<h6 className="prop--title-secondary">Places in bookshelves</h6>) : null}
            <ul className={`${linear ? 'flex flex-col md:flex-row': 'leading-tight grid grid-rows-auto grid-cols-2'}`}>
                {shelveList.map(shelf => (
                    <li
                        key={shelf}
                        className={
                            `${linear ? "text-xs font-light md:font-normal pl-2 first:pl-0 after:content-[','] after:last:content-['']"
                                : 'text-xs font-light'}`
                        }
                    >
                        {shelf}
                    </li>
                ))}           
            </ul>
        </div>
    )
}
