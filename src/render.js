import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addDialog, addPost } from './redux/state';
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            addDialog={addDialog}
        />,
        document.getElementById('root')
    );
};