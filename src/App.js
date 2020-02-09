import React from 'react';
import List from './list/List';
import Header from './header/Header';


const App = () => {
    return(
        <div className='app'>
            <Header />
           <List />
        </div>
    )
}

export default App