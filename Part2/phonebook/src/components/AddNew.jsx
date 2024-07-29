const AddNew = ({addName, newName, newNum, handleNewName, handleNewNum}) => {
    return(

        <div>
            <form onSubmit={addName}>
                <div>
                Name: 
                <input 
                    value={newName}
                    onChange={handleNewName}/>
                </div>
                <div>Number: 
                <input
                    value={newNum}
                    onChange={handleNewNum} 
                    />
                </div>        
                <div>
                <button type="submit" >add</button>
                </div>
            </form>
        </div>
        
    )   

}

export default AddNew