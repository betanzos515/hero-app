import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


export const HeroList = ({publisher}) => {
    //esta funcion se queda memorizada y solo se disparará en caso de que cambien el publisher
    const heroes = useMemo(() => getHeroesByPublisher(publisher),[publisher]);
    return (
    
        <div className='d-flex flex-row flex-wrap'>
            {
                heroes.map(heroe=>(
                    <HeroCard key={heroe.id} {...heroe}/>
                ))
            }
        </div>

    )
}
