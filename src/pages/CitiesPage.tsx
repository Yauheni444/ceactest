import React, {FC, useEffect, useState} from "react";
import {ICiti, IUser} from "../types/types";
import CitiItem from "../components/CitiItem";
import List from "../components/List";

const CitiesPage:FC = () =>{
    const [citis, setSitis] = useState<ICiti[]>([])

    useEffect(() => {
        fetchCiti()
    }, [])

    async function fetchCiti() {
        try {
            const response = [
                {id: 1, name: 'Минск'},
                {id: 2, name: 'Москва'}
            ]
            if (localStorage.getItem('Citi') !== null) {
                const response = localStorage.getItem('Citi')
                console.log(response)
                //setSitis(response)
            }
            setSitis(response)
        } catch (e) {
            alert(e)
        }
    }

    return(
        <List
            items={citis}
            renderItem={(citi: ICiti) => <CitiItem citi={citi} key={citi.id}/>}
        />
    );
};

export default CitiesPage;