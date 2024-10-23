import React from 'react'
import Nav from './sections/Nav'
import Hero from './sections/Hero'
import About from './sections/About'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Nav />
      <Hero />
      <About />
    </main>
    )
}

export default App