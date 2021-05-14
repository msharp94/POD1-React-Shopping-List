import './DisplayShoppingList.css'

function DisplayShoppingList(props){
    let shoppingList = props.shoppingList;

    function isPurchased(item){
        if (item.purchase_status === false) {
            return (<><button className='purchase' onClick={(event) => props.purchaseItem(item.id)}>Purchase</button>
                    <button className='delete' onClick={(event) => props.deleteItem(item.id)}>Delete</button></>);
        }
        else {
            return (<p className='purchased'>PURCHASED</p>);
        }
    }


    return (
        <>
            {shoppingList.map(item => (
                <div className='displayBox' key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.quantity} {item.unit}</p>
                    {isPurchased(item)}
                </div>
            ))}
        </>
    )
}

export default DisplayShoppingList;