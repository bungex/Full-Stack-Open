const Persons = ({content}) => {
    return(
        <div>
            {content.map(p => <div key={p.id}> {p.name}: {p.number} </div>)}
        </div>
    )
}

export default Persons