import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = (heroe) => {
    const {
        id,
        superhero,
        alter_ego,
        first_appearance,
        characters
    } = heroe;
    return (
      <div className="card animate__animated animate__fadeIn ms-6" style={{width:'15rem'}}>

        <div className="card-body text-center">
          <img className="fluid w-100" src={`../../assets/heroes/${id}.jpg`} alt={superhero} style={{height:350}} />
          <h5 className="card-title text-center mt-3">{superhero}</h5>
          <p className="card-text text-center">{alter_ego}</p>
          { (alter_ego !== characters) && <p className='card-text'>{characters}</p>}
          <p className='card-text'>
            <small className='text-muted'>{first_appearance}</small>
          </p>
          <Link className='btn btn-primary center-block ' to={`/heroes/${id}`}>Acerca de</Link>
        </div>
      </div>
    )
}
