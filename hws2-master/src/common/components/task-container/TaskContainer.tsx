import React, {FC, PropsWithChildren} from 'react';
import s from "./TaskContainer.module.scss"


export const TaskContainer: FC<PropsWithChildren<{id: string}>> = ({children, ...props}) => {
    return (
        <div {...props} className={s.container}>
            {children}
        </div>
    );
};

