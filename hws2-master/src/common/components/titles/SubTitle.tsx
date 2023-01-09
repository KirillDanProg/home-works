import React, {FC, PropsWithChildren} from 'react';
import s from "./style.module.scss"

type PropsType = {
    title: string
}
export const SubTitle: FC<PropsWithChildren> = ({children}) => {
    return (
        <h2 className={s.subtitle}>
            {children}
        </h2>
    );
};

