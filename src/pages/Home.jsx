import React  from 'react'
import '../styles/Home.css'
import HeaderHome from '../components/HeaderHome'
import ContainerCountries from '../containers/ContainerCountries'

const Home = () => {

  return (
    <main className='home'>
      <HeaderHome />
      <ContainerCountries />
    </main>
  )
}

export default Home