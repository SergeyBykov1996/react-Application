import React from 'react';

import AppHeader from '../app-header/app-header'; 
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter'; 
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import './app-header.css';
import './post-add-form.css';
import './post-list.css';
import './post-list-item.css';
import './post-status-filter.css';
import './search-panel.css';

const App = () => {

    const data = [
        {label:'Going to learn react', important:true, id:'asdasd'},
        {label:'That is so good', important:false, id:'asdad'},
        {label:'I need a break', important:false, id:'asdasr'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>    
                <PostStatusFilter/>
            </div> 
            <PostList posts={data}/>
            <PostAddForm/>
        </div>    
    )
}

export default App;