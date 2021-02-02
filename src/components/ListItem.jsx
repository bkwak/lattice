import React from 'react';


const ListItem = ({item, setUrl, setItem, toggle}) => {

    // const name = item.inStock ? 'black' : 'red'
    const update = () => {
        setItem(item);
        toggle(true);
    }

    return (
        <div onClick={update}>
            <img src={item.imageUrl}></img>
            <span className='warning'>OUT OF STOCK</span>
            <div>
                <span>{item.name}</span>
                <span>{item.price}</span>
            </div>
            {/* <button className='view' >View detail</button> */}
        </div>
    )

};

export default ListItem;