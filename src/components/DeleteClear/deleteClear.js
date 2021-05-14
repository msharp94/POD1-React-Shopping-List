import PropTypes from 'prop-types';

function DeleteOrClear({ clear, ...props}) {
    
    return (
        <>
           <button onClick= {(event) => props.deleteList()}>Delete</button>
            
           <button onClick= {(event) => props.resetItems()}>Reset</button>
        
        
        
        </>


    );


    
}

export default DeleteOrClear;