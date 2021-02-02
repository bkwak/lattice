import React, {useEffect, useState} from 'react';
import fetchProducts from '../MockProductApiClient.js';
import List from './List.jsx';
import Modal from './Modal.jsx';

import searchImg from '../assets/search.svg';

const DisplayContainer = () => {

    const [value, setValue] = useState('');
    const [isChecked, toggleChecked] = useState(false);
    const [items, setItems] = useState([]);
    const [currItem, setItem] = useState({});
    const [modal, toggleModal] = useState(false);

    useEffect(async () => {
        const results = await fetchProducts();
        setItems(results);
    }, [])

    return (
        <div>
            {modal && <Modal setItem={setItems} item={currItem} toggle={toggleModal}/> }
            <span><img src={searchImg}/> <input id='search' type="text" value={value} placeholder='Search Products' onChange={e => setValue(e.target.value)}></input><span id='exit'>X</span></span>
            <input type="checkbox" id="stock" name="inStock" onChange={e => toggleChecked(e.target.checked)}
            checked={isChecked}></input>
            <label for="inStock">In stock products only</label>
            <List data={items} search={value} checked={isChecked} setItem={setItem} toggle={toggleModal}/>
        </div>
    )


}

export default DisplayContainer;