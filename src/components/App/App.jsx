import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from '../ItemForm/ItemForm.jsx';
import Header from '../Header/Header.jsx';
import DeleteOrClear from '../DeleteClear/deleteClear.js';

import './App.css';
import DisplayShoppingList from '../DisplayShoppingList/DisplayShoppingList.jsx';

function App() {
  let [shoppingList, setShoppingList] = useState([]);

  //GET on load
  useEffect(() => {
    displayList();
  }, []);

  function deleteItem(listId) {
    axios({
      method: 'DELETE',
      url: `/list/a/${listId}`
    })
      .then((response) => {
        displayList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteList() {
    axios({
      method: 'DELETE',
      url: `/list/deleteAll`
    })
      .then((response) => {
        displayList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // ADD ITEM
  function addNewItem(newItem) {
    /*{create object in item form compnent} */

    axios({
      method: 'POST',
      url: '/list',
      data: newItem /*{create object newItem in item form compnent} */
    })
      .then((response) => {
        displayList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function resetItems() {
    axios({
      method: 'PUT',
      url: '/list/reset'
    })
      .then((response) => {
        displayList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //GET
  const displayList = () => {
    axios
      .get('/list')
      .then((response) => {
        console.log(response.data);

        setShoppingList(response.data);
      })
      .catch((error) => {
        alert('error getting shopping list');
        console.log(error);
      });
  };

  //PUT
  const purchaseItem = (listid) => {
    console.log(listid);

    axios
      .put(`/list/${listid}`)
      .then((response) => {
        displayList();
      })
      .catch((error) => {
        alert('error purchasing item');
        console.log(error);
      });
  };

  return (
    <div className='App'>
      <Header />
      <main>
        <ItemForm addNewItem={addNewItem} />
        <br />
        <DeleteOrClear resetItems={resetItems} deleteList={deleteList} />
        <br />
        <DisplayShoppingList
          shoppingList={shoppingList}
          purchaseItem={purchaseItem}
          deleteItem={deleteItem}
        />
      </main>
    </div>
  );
}

export default App;
