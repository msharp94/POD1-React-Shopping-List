import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from '../ItemForm/ItemForm.jsx';
import Header from '../Header/Header.jsx';

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
        url: `/list/${listId}`
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
        url: `/list`
    })
    .then((response) => {
        displayList();
    })
    .catch((error) => {
        console.log(error);
    });
}


 
    function addNewItem(newItem) {
      /*{create object in item form compnent} */

      axios({
        method: 'POST',
        url: '/lists',
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
            url: '/list',
            data: listid
        }).then((response) => {
            displayList();
        }).catch((error) => {
            console.log(error);
        })
    }



    //GET
    const displayList = () => {
        axios.get('/list').then(response => {
            console.log(response.data);
    
            setShoppingList(response.data);
        }).catch(error => {
            alert('error getting shopping list');
            console.log(error);
        })
    }
    

    //PUT
    const purchaseItem = (listid) => {
        console.log(listid);

        axios.put(`/list/${listid}`).then(response => {
            displayList();
        }).catch(error => {
            alert('error purchasing item');
            console.log(error);
        })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <ItemForm />
                <p>🚧 Under Construction...🚧</p>
                <DisplayShoppingList shoppingList={shoppingList} purchaseItem={purchaseItem} deleteItem={deleteItem} />
            </main>
        </div>
    );
}

export default App;
