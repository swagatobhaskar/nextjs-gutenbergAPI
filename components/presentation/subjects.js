
export default function Subjects({subjects}) {
    return (
        <div className="">
            {subjects.map(sub => (
                <li key={sub} className=''>{sub}</li>
            ))}
        </div>
    )
}
