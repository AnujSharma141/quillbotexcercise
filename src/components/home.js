import React from 'react'
import Nav from './nav'
import Header from './header'
import Carousel from './carousel'
import Pricing from './pricing'

export default function Home() {
  return (
    <div>
        <Nav />
        <Header />
        <Carousel />
        <Pricing />
    </div>
  )
}
