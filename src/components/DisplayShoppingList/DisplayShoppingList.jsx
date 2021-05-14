function DisplayShoppingList(props){
    let shoppingList = props.shoppingList;

    function isPurchased(item){
        if (item.purchase_status === false) {
            return (<><button onClick={(event) => props.purchaseItem(item.id)}>Purchase</button>
                    <button onClick={(event) => props.deleteItem(item.id)}>Delete</button></>);
        }
        else {
            return (<p>PURCHASED</p>);
        }
    }


    return (
        <>
            {shoppingList.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.quantity} {item.unit}</p>
                    {isPurchased(item)}
                </div>
            ))}
        </>
    )
}

export default DisplayShoppingList;