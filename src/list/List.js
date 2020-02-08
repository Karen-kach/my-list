import React, {useEffect, useState} from 'react';
import './List.css';

function List () {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(resp => resp.json()) 
        .then(json => {
            setItems(json)
            setLoading(true)   
        });
    });
      if(!loading) {
          return <div className='loading'>Loading....</div>
      } else {

        return(    
            <div className='list'>
                <ul className='name'>
                    {
                    items.map(item => <li key={item.id}>
                    {item.name} - {item.username} 
                    </li>)
                    }
                </ul>
                <ul className='email'>
                    {
                    items.map(item => <li key={item.id}>
                    {item.email}
                    </li>)
                    }
                </ul>
                <ul className='address'>
                    {
                    items.map(item => <li key={item.id}>
                    {item.address.city}, {item.address.country} 
                    </li>)
                    }
                </ul>
            </div>
        )
    }
}

export default List