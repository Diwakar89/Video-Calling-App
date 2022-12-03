import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Home Component</h1>
        <h1 style={ { color: 'white', backgroundColor: 'blueviolet', border: '1px solid red' } } >My React App</h1>
      <button className='btn btn-primary'>Nice</button>
    </div>
  )
}

export default Home