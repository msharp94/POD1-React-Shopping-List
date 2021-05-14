function ProductItem({ item, purchaseItem, deleteItem }) {
  function isPurchased(item) {
    if (item.purchase_status === false) {
      return (
        <>
          <button
            className='purchase'
            onClick={(event) => purchaseItem(item.id)}
          >
            Purchase
          </button>
          <button className='delete' onClick={(event) => deleteItem(item.id)}>
            Delete
          </button>
        </>
      );
    } else {
      return <p className='purchased'>PURCHASED</p>;
    }
  }

  return (
    <div className='displayBox' key={item.id}>
      <p>{item.name}</p>
      <p>
        {item.quantity} {item.unit}
      </p>
      {isPurchased(item)}
    </div>
  );
}

export default ProductItem;
