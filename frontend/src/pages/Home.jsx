// import BanquetCard from '@/components/custom/BanquetCard'
import CardList from '@/components/custom/CardList'
import Carousel from '@/components/custom/Carousel'
import SearchNavbar from '@/components/custom/Searchbar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <SearchNavbar/>
      <CardList/>
    </div>
  )
}

export default Home
