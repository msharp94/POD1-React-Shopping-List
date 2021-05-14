import { useState } from 'react';
import './ItemForm.css';

function ItemForm(props) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    console.log(itemName, quantity, unit);

    const newItem = {
      name: itemName,
      quantity: quantity,
      unit: unit
    };

    props.addNewItem(newItem);

    console.log(newItem);

    // clear the form
    setItemName('');
    setQuantity('');
    setUnit('');
  }

  return (
    <div className='input-form'>
      <h2>Add an Item</h2>
      <form onSubmit={onSubmit}>
        <div className='line-one'>
          <label htmlFor='item'>Item: </label>
          <input
            id='item'
            placeholder='item'
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
            required
          />
        </div>

        <br />
        <div className='line-two'>
          <label htmlFor='quantity'>Quantity: </label>
          <input
            id='quantity'
            placeholder='quantity'
            onChange={(event) => setQuantity(event.target.value)}
            value={quantity}
            required
          />
          <label htmlFor='unit'>Unit: </label>
          <input
            id='unit'
            placeholder='unit'
            value={unit}
            onChange={(event) => setUnit(event.target.value)}
          />
        </div>
        <br />
        <button className='add-item'>Add item</button>
      </form>
    </div>
  );
}

export default ItemForm;
