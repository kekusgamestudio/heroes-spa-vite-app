import { HeroList } from './HeroList';

export const HeroContainer = ( { publisher } ) => {
  return (
    <>
      <h1>{ publisher }</h1>
      <hr />
      <HeroList publisher={ publisher } />
    </>

  )
}
