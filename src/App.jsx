import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature from './components/Feature'
import Counter from './components/Counter'
import Cards from './components/Cards'
import DonateNow from './components/DonateNow'
import Benifactors from './components/Benifactors'
import CaseStudy from './components/CaseStudy'
import Sponsors from './components/Sponsors'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
const App=() => {
  return (
    <div className="w-full overflow-hidden">
      <div>
        <Navbar />
        <Hero />
        <div className='bg-dimWhite'>
          <Feature />
        </div>
        <Counter />
        <Cards />
        <div className='bg-dimWhite'>
          <DonateNow />
        </div>
        <Benifactors />
        <CaseStudy />
        <Sponsors />
        <div className='bg-dimWhite'>
          <SignUp />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App