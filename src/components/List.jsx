import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({data, search, checked, setUrl, setItem, toggle}) => {


    const cache = {};

    if(data) data.forEach(item => {
        if(search) {
            if(!item.name.toLowerCase().startsWith(search.toLowerCase())) return;
        }
        if(checked) {
            if(!item.inStock) return;
        }
        const newItem = <ListItem item={item} setUrl={setUrl} setItem={setItem} toggle={toggle}/>
        if(cache[item.category]) cache[item.category].push(newItem);
        else {
            cache[item.category] = [newItem];
        }
    });

    const itemList = [];
    
    Object.entries(cache).forEach(arr => {
       itemList.push(arr[0]);
       itemList.push(arr[1]);
    });

    return (
        <div>
            {itemList.length ? itemList : <strong>No products found</strong>}
        </div>
    )


};

export default List;