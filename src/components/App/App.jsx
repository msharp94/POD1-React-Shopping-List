import { useState, useEffect} from 'react';
import axios from 'axios';

import Header from '../Header/Header.jsx';
import './App.css';


function App() {

    const [newItem, setNewItem] = useState([]);

    useEffect(() => {
        console.log('App is loaded!');
        displayList();
    }, []);

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
            data: /*?*/
        }).then((response) => {
            if 
        })
    }


  return (
    <div className='App'>
      <Header />
      <main>
        <p>Under Construction...</p>
      </main>
    </div>
  );
}

export default App;
