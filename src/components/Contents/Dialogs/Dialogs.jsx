import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={css.dialog}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((dialog, i) => <DialogItem key={i} name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map((m, i) => <Message key={i} message={m.message} />);
    let newDialogElement = React.createRef();
    const addDialog = () => {
        let dialogText = newDialogElement.current.value;
        // alert(dialogText)
        props.addDialog(dialogText);
        newDialogElement.current.value = ''
    }
    return (
        <section>
            <div className={css.dialogs}>
                <div className={css.dialogsItems}>{dialogsElements}</div>
                <div className={css.messages}>{messagesElements}</div>
            </div>
            <div>
                <textarea ref={newDialogElement}></textarea>
                <button onClick={addDialog}>dialog</button>
            </div>
        </section>
    )
}
export default Dialogs;