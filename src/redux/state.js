import { rerenderEntireTree } from "../render";

let state = {
    postPage: {
        postData: [
            { message: 'Hi, how are you', countLikes: '110' },
            { message: 'Hello, how are you', countLikes: '20' },
        ],

    },
    messagePage: {
        dialogs: [
            { name: 'Sasha', id: '1' },
            { name: 'Masha', id: '2' },
            { name: 'Sveta', id: '3' },
            { name: 'Dimych', id: '4' },
            { name: 'Lera', id: '5' }
        ],
        messages: [
            { id: '1', message: 'hi' },
            { id: '2', message: 'Hello' },
            { id: '3', message: 'Goodmorning' },
            { id: '4', message: 'Bye' },
            { id: '5', message: 'ok' }
        ]
    }
}

export let addPost = (postMessage) => {
    // debugger;
    let newPost = {
        id: 6,
        message: postMessage,
        countLikes: 0
    };

    state.postPage.postData.push(newPost);
    rerenderEntireTree(state);
}

export let addDialog = (dialog) => {

    let newDialog = {
        id: 6,
        name: 'name',
        message: dialog
    }
    state.messagePage.dialogs.push(newDialog);
    state.messagePage.messages.push(newDialog);
    rerenderEntireTree(state)
}
export default state;

