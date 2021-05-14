import { useState } from 'react';

function ItemForm(props) {
  console.log(`ItemForm Props are: `, props);

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState(0);

  function onSubmit(event) {
    event.preventDefault();
    console.log(itemName, quantity, unit);

    const newItem = {
      name: itemName,
      quantity: quantity,
      unit: unit
    };

    props.addItem(newItem);

    console.log(newItem);

    // clear the form
    setItemName('');
    setQuantity('');
    setUnit('');
  }

  return (
    <div class='input-form'>
      <h2>Add an Item</h2>
      <form onSubmit={onSubmit}>
        <label for='item'>Item: </label>
        <input
          id='item'
          placeholder='item'
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
          required
        />
        <br />

        <label for='quantity'>Quantity: </label>
        <input
          id='quantity'
          placeholder='quantity'
          onChange={(event) => setQuantity(event.target.value)}
          value={quantity}
          required
        />
        <label for='unit'>Unit: </label>
        <input
          id='unit'
          placeholder='unit'
          value={unit}
          onChange={(event) => setUnit(event.target.value)}
        />
        <br />
        <button>Add item</button>
      </form>
    </div>
  );
}

export default ItemForm;
