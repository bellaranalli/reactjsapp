import React from 'react';
import "./ItemListContainer.css"
import CountButton from '../countbutton/CountButton'
import DetailButton from '../detailbutton/DetailButton';

function Item() {
    const data = [
        {
            id: 1, 
            title:'ALBA',
            price: 100,
            category: 'Vino Tinto',
        },
        {
            id: 2, 
            title:'LUCERO',
            price: 100,
            category: 'Vino Tinto',
        }, 
        {
            id: 3, 
            title:'DAMASCO',
            price: 100,
            category: 'Vino Blanco',
        }, 
        {
            id: 4, 
            title:'CAMDEN',
            price: 100,
            category: 'Vino Blanco',
        }    
    ]
    const listItems = data.map(
        (element) => {
            return (
                <div className='card'>
                <ul className='listado'>
                    <li>{element.id}</li>
                    <li>{element.title}</li>
                    <li>{element.price}</li>
                    <li>{element.category}</li>
                    
                </ul>
                <CountButton />
                <DetailButton />
                </div>
                
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}


export default Item;

