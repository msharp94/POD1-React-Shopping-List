function DisplayShoppingList(props){
    let shoppingList = props.shoppingList;

    function isPurchased(prompt){
        if (prompt === false) {
            return (<><button onClick={(event) => purchaseButton(item.id)}>Purchase</button>
                    <button onClick={(event) => deleteButton(item.id)}>Delete</button></>);
        }
        else {
            return (<p>PURCHASED</p>);
        }
    }

    function purchaseButton(listid){
        props.purchaseItem(listid);
    }

    function deleteButton(listid){
        props.deleteItem(listid);
    }

    return (
        <>
            {shoppingList.map(item => (
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.quantity} {item.unit}</p>
                    {isPurchased(item.purchase_status)}
                </div>
            ))}
        </>
    )
}

export default DisplayShoppingList;