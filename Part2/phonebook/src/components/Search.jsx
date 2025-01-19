const Search = ({find, handle}) => {


    return(
    <div>
        <form >
            <div>
                filter shown with
                <input 
                    value={find}
                    onChange={handle}/>
            </div>
        </form>
    </div>
        
    )
}

export default Search