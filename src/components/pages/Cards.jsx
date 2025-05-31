import React from 'react'

import Headline from '../cards/Headline'
import FormCard from '../cards/FormCard'
import HealthCheckupSlider from '../cards/HealthCheckupSlider'
const Cards = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10 '>

      <Headline heading={"Health Packages"} text={"Popular Health Check Packs"} />

      <HealthCheckupSlider />

      <FormCard />
    </div>
  )
}

export default Cards