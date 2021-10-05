import React, {FC} from "react";

interface ListProps<T>{
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>){
    return (
        <table>
            {props.items.map(props.renderItem)}
        </table>

    )
}