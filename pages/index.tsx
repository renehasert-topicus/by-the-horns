import homeStyles from '../styles/Home.module.scss'
import React from 'react'
import Hero from '../components/Hero'
import ActionWall from '../components/ActionWall'
import Testimonials from '../components/Testimonials'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <Nav />
      <Hero>
        <Testimonials />
        <ActionWall />
      </Hero>
      <section id='carousel' style={{ height: '100rem' }}>
      </section>
    </div>
  )
}