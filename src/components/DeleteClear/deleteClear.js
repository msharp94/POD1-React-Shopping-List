function DeleteOrClear({ clear, ...props}) {
    
    return (
        <>
           <button onClick= {(event) => props.deleteList()}>Clear</button>
            
           <button onClick= {(event) => props.resetItems()}>Reset</button>
        
        
        
        </>


    );


    
}

export default DeleteOrClear;