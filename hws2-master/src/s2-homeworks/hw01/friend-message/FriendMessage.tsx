import React, {FC} from 'react'
import s from '../HW1.module.scss'
import {MessageType} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
type FriendMessagePropsType = {
    message: MessageType
}
const FriendMessage: FC<FriendMessagePropsType> = (props) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={`${s.message} ${s.friendMessage}`}
        >
            <div className={`${s.imageAndText} ${s.friendImageAndText}`}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    // создаёт студент
                    src={props.message.user.avatar}
                    //
                />
                <div>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.name}
                    >
                        {props.message.user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={`${s.time} ${s.friendTime}`}
            >
                {props.message.message.time}
            </div>
        </div>
    )
}

export default FriendMessage
