import React, {FC} from "react";
import {ICiti} from "../types/types";

interface CitiItemProps {
    citi: ICiti
}

const CitiItem: FC<CitiItemProps> = ({citi}) => {
    return (
        <div>
            <div style={{padding: 15, border: '1px solid gray'}}>
                {citi.id}. {citi.name}
            </div>
        </div>
    );
};

export default CitiItem;