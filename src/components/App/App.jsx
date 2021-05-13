import { response } from 'express';
import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';


function App() {


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
