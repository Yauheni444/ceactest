import React, {FC} from "react";
import {ICiti} from "../types/types";
import CitiItem from "./CitiItem";


interface CitiListProps {
    cities: ICiti[]
}

const CitiList: FC<CitiListProps> = ({cities}) => {
    return (
        <div>
            {cities.map(citi=>
               <CitiItem key={citi.id} citi={citi} />
            )}
        </div>
    );
};

export default CitiList;