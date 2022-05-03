import React, { useMemo } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const navigate = useNavigate();
  const { heroeId} = useParams();
  const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]) ;
  if(!hero){
    return <Navigate replace to = '/' />
  }
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero

  const handleReturn = ()=>{
    navigate(-1, {replace: true})
  }

  return (
    <div className='row mt-5'>
      <div className='col-4 animate__animated animate__fadeInLeft'>
        <img src = { heroImages(`./${ heroeId }.jpg`) } alt = { superhero } className='img-thumbnail' />
        </div>      
        <div className='col-8 animate__animated animate__fadeIn'>
          <h3>
          { superhero }
          </h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <b>Alter ego: { alter_ego }</b> 
            </li>
            <li className='list-group-item'>
              <b>Publisher: { publisher }</b>
            </li>
            <li className='list-group-item'>
              <b>First Appearence: { first_appearance }</b>
            </li>
          </ul>
          <h5>Characters: </h5> 
          <p>{ characters }</p>

          <button className='btn btn-outline-info' onClick={handleReturn} >
            Return
          </button>
        </div>
    </div>
  )
}
