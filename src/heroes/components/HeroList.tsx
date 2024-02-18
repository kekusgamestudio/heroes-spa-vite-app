import { useMemo } from 'react';
import { HeroCard } from '.';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';

export const HeroList = ( { publisher } ) => {
  const heroesList = useMemo( () => getHeroesByPublisher(publisher), [publisher] );

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
      { heroesList.map( (hero) => ( 
          <HeroCard
            key={hero.id} 
            {...hero} 
          /> ) ) }
    </div>
  )
}
