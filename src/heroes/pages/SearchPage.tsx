
export const SearchPage = () => {
  return (
    <>
      <h1>Search Page</h1>
      <hr />

      <div className='col-5'>
        <h4>Searching...</h4>
        <hr />
        <form action=''>
          <input 
            type='text' 
            placeholder='Search a hero'
            className='form-control'
            name='searchTexr'
            autoComplete='off'
          />
          <button className='btn btn-outline-primary mt-1'>
            Search
          </button>
        </form>
      </div>    
    </>
  )
}
