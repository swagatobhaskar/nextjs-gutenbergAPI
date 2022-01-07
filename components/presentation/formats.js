
export default function Formats({formatObject}) {
    return (
        <div className="">
            {/* Since formats is coming as Object not array, used Object.entries().map() */}
            {Object.entries(formatObject).map(([key, value]) => (
                <a
                    key={key}
                    href={value}
                    className=''
                >
                    {key}
                </a>
            ))}
        </div>
    )
}