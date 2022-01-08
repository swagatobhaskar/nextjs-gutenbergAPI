
export default function Bookshelves({shelveList, linear}){

    return (
        <div>
            {linear ? (<h6 className="prop--title-secondary">Places in bookshelves</h6>) : null}
            <ul className={`${linear ? 'flex flex-row': 'leading-tight grid grid-rows-4 grid-cols-2'}`}>
                {shelveList.map(shelf => (
                    <li
                        key={shelf}
                        className={
                            `${linear ? "text-xs font-normal pl-2 first:pl-0 after:content-[','] after:last:content-['']"
                                : 'text-sm font-light'}`
                        }
                    >
                        {shelf}
                    </li>
                ))}           
            </ul>
        </div>
    )
}
