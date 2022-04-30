import React, { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const q = searchParams.get('q') ? searchParams.get('q') : '';
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }
  return (
    <div>
      <h1>
        SearchScreen
      </h1>
      <hr />
      <div className='col'>
        <div className='card col-sm-10 col-lg-7 mb-2'>
          <div className='card-body'>

            <h4>Search Form</h4>
            <hr />
            <form onSubmit={handleSearch}>
              <div className='row justify-content-between d-flex align-items-center'>

                <div className='col-sm-7 col-lg-8 mb-6 justify-content-start'>
                  <input
                    type='text'
                    placeholder='Find your Hero'
                    className='form-control'
                    name='searchText'
                    value={searchText}
                    onChange={handleInputChange}
                  />
                </div>
                <div className='col-sm-5 col-lg-2 mb-6 d-flex justify-content-end'>
                  <button
                    type='submit'
                    className='btn m-1 btn-block btn-outline-primary'
                  >
                    Search...
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
        <div className='row'>
          <h4>Results</h4>
          <hr />
          <div className="row justify-content-center animate__animated animate__fadeIn" data-masonry='{"percentPosition": true }' >

            {
              heroesFiltered.map(hero => (
                <HeroCard
                  key={hero.id}
                  {...hero}
                />
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}
