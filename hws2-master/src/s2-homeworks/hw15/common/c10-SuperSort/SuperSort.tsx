import React from 'react'


// добавить в проект иконки и импортировать
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return sort === "down" ? down : up
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = (sort: string) => {
        onChange(pureChange(sort, down, up))
    }


    return (
        <span id={id + '-sort-' + value}>
            <i onClick={() => onChangeCallback("up")} className="fa-solid fa-angle-up"></i>
            <i onClick={() => onChangeCallback("down")} className="fa-solid fa-angle-down"></i>
        </span>
    )
}

export default SuperSort
