const Persons = ({content, handleRemove}) => {

    return(
        <div key={content.id}>
            {content.name}: {content.number}
            <button onClick={handleRemove}> Delete </button>
        </div>
    )
}

export default Persons