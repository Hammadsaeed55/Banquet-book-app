import React from 'react'
import CardItem from './CardItem'

const CardList = () => {
  return (
    <div className='flex flex-row flex-wrap gap-y-10 mb-10 mx-3 justify-evenly '>
      <CardItem name={"hari lawn"} des={'one of best and affordable banquet hall'} loc={"ghaziabad"}/>
      <CardItem name={"ratan"} des={"very good banquet hall"} loc={"delhi"}  />
      
    </div>
  )
}

export default CardList
