import React, {FC} from 'react';
import s from "./style.module.scss"

type PropsType = {
    title: string
}
export const Title: FC<PropsType> = ({title}) => {
    return (
        <h2 className={s.title}>
            {title}
        </h2>
    );
};

