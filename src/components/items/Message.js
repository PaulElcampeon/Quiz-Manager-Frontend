import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMessage } from '../../store/actions';

const Message = (props) => {
    //Redux tools
    const dispatch = useDispatch();
    const storeExtractor = useSelector(store => store);
    const { message } = storeExtractor;

    const hideMessage = () => {
        dispatch(updateMessage(null));
    }

    return (
        <div className="message_wrapper">
            <p className="message_text">{message}</p>
            <button className="message_ok_btn" onClick={hideMessage}>OK</button>
        </div>
    )
}

export default Message;