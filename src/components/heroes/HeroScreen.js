import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {
    //coustomHook para leer los parametros enviados por url
    const {heroeId} = useParams();
    // const hero = getHeroesById(heroeId);
    const hero = useMemo(() => getHeroesById(heroeId),[heroeId])
    
    if(!hero){
        //redireccionamos en caso de tener un error con la renderizacion
        return <Redirect to='/'/>
    }

    const handleClick = ()=>{
        //history goback() nos sive para regesar a la navegacion anterior. que se encuentra en nuestro historial de navegación
        (history.length <=2)?history.push('/') : history.goBack();

    }
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    return (    
        <div className='row mt-5 animate__animated animate__backInDown'>
            <div className='col-5'>
                <img src={`../../assets/heroes/${id}.jpg`} alt={superhero} className='img-thumbnail'/>
            </div>  
            <div className='col-6'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush' >
                    <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                    <li className='list-group-item'><b>Fist Appearence: </b>{first_appearance}</li>
                </ul>
                <div className='mt-4'  >
                    <h5>Characters</h5>
                    <p>{characters}</p>
                    <button className='btn btn-outline-primary' onClick={handleClick}>Regresar</button>
                </div>
            </div>
        </div>
    )
}
