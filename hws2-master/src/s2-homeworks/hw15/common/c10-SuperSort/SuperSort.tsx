import React, {memo} from 'react'

const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    debugger
    return sort === up ? down : up
}

const SuperSort: React.FC<SuperSortPropsType> = memo((
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? <i className="fa-solid fa-caret-up"></i>
        : sort === up
            ? <i className="fa-solid fa-caret-down"></i>
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
           {icon}
        </span>
    )
})

export default SuperSort
