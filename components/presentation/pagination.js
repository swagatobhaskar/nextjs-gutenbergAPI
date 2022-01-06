export default function Pagination({previousPageUrl, previousPageClick, nextPageClick}) {

    return (
        <div className='mx-auto mb-3 w-2/5 h-10 flex flex-row'>
            {previousPageUrl ? (
                <button
                    onClick={() => previousPageClick()}
                    className='m-auto py-1 px-2 rounded-sm bg-blue-600 text-white font-semibold text-sm active:bg-blue-800'
                >
                    Previous Page
                </button>
            ) : (
                <button
                    onClick={() => previousPageClick()}
                    disabled
                    className='m-auto py-1 px-2 rounded-sm bg-blue-600/80 text-white font-semibold text-sm'
                >
                    Previous Page
                </button>
            )}
            <button
                onClick={() => nextPageClick()}
                className='m-auto py-1 px-2 rounded-sm bg-blue-600 text-white font-semibold text-sm active:bg-blue-800'
            >
                Next Page
            </button>
        </div>
    )
}
