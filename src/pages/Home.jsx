import React  from 'react'
import '../styles/Home.css'
import HeaderHome from '../components/HeaderHome.jsx'
import ContainerCountries from '../containers/ContainerCountries.jsx'

const Home = () => {

  return (
    <main className='home'>
      <HeaderHome />
      <ContainerCountries />
    </main>
  )
}

export default Home