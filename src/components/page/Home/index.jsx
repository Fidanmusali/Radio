import React from 'react'
import RadioMusic from './RadioMusic'
import Broadcasts from './Broadcasts'
import Leading from './Leading'
import Patners from './Patners'

const Home = () => {
  return (
    <div>
      <div className="homes">
        <RadioMusic />
        <Broadcasts />
      </div>
      <Leading />
      <Patners />
    </div>
  )
}

export default Home