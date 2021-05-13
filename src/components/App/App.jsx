import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {

    let [shoppingList, setShoppingList] = useState([]);

    //GET on load
    useEffect(() => {
        displayList();
      }, [])

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
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
