import React, { useMemo } from 'react'

import queryString from 'query-string'; //query string nos sirve para extraer los valores de los queryString.
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {
    
    
    const location = useLocation();//nos trae los parametros de la url.
    const {q=''} = queryString.parse(location.search); //extrae los valores del query para dejarnos solo la busqueda.
    
    //hacemos uso de nuestro coustomHook
    const [value,handleInputChange] = useForm({
        searchText:q
    });
    
    const {searchText} = value; //searchText es el valor de la busqueda.

    const heroesFiltered =  useMemo(() => getHeroesByName(q) ,[q]);
    
    const handleSearch = (e)=>{
        e.preventDefault();
        history.push(`?q=${ searchText }`)
    }

    return (
        <>
            <h1>Searc Screen</h1>   
            <hr/>
            <div className='row'>
                <div className='col-4'>
                    <h4>Search form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type='text'
                            placeholder='find your hero'
                            className='form-control'
                            name='searchText'
                            value={searchText}
                            autoComplete='off'
                            onChange={handleInputChange}
                        />
                    <button 
                        type='submit'
                        className='btn btn-outline-primary m-1 d-block'
                    > Search...</button>
                    </form>
                </div>  

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr/>
                    {(q==='') && <div className='alert alert-info'>
                        Search a Hero
                    </div>}

                    {(q!=='' && heroesFiltered.length===0) && <div className='alert alert-danger'>
                        Theres id not a hero with ${q}
                    </div>}
                    <div className='d-flex flex-wrap'>
                    {
                        heroesFiltered.map(hero=>(
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />)
                        )
                    }
                    </div>
                </div>
            </div>
        </>
    )
}
