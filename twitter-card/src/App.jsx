import { useState } from 'react'
import { Card } from '../camponent/Card'
import './App.css'

function App() {
  const formatUserName = (userName) => `@${userName}`
  return (
    <section className='App'>
      <Card
        initialIsFollowing={false}
        formatUserName={formatUserName}
        userName='Franco'
        name='Franco Espinoza'
      />
      <Card
        initialIsFollowing={true}
        formatUserName={formatUserName}
        userName='TSFTraps'
        name='Jean Lucas Migueles'
      />
      <Card
        initialIsFollowing={false}
        formatUserName={formatUserName}
        userName='midudev'
        name='Miguel Ángel Durán'
      />
    </section>
  )
}

export default App
