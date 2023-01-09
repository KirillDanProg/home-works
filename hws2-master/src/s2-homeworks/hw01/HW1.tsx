import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import {SubTitle} from "../../common/components/titles/SubTitle";
import s from "./HW1.module.scss"
import {TaskContainer} from "../../common/components/task-container/TaskContainer";

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type MessageType = {
    id: number
    user: UserType
    message: MessageTyp
}

type UserType = {
    avatar: typeof avatar
    name: string
}
type MessageTyp = {
    text: string
    time: string
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Some Name',  // можно менять
    },
    message: {
        text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:00', // можно менять
    },
}

const HW1 = () => {
    return (
        <>
            <SubTitle>Homework &#8470;1</SubTitle>

            <TaskContainer id={'hw1'}>
                <div className={s.container}>
                    <div className={s.messagesContainer}>
                        <Message message={message0}/>
                        <FriendMessage message={friendMessage0}/>
                    </div>
                    <div className={s.messageSender}>
                        <MessageSender M={Message}/>
                    </div>

                </div>
            </TaskContainer>
        </>
    )
}

export default HW1
