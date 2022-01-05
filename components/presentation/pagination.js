export default function Pagination({previousPageUrl, nextPageClick}) {

    return (
        <div className='mx-auto mb-3 w-2/5 h-10 flex flex-row'>
            {previousPageUrl ? <a href={previousPageUrl}>Previous</a> : null}
            <button
                onClick={() => nextPageClick(url)}
                className='m-auto py-1 px-2 rounded-sm bg-blue-600 text-white font-semibold text-sm'
                >
                Next Page
            </button>
        </div>
    )
}
