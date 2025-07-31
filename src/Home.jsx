import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import PrincipleCard from "./component/principal"
import FeatureSection from './component/FeatureSection'
import ScrollableSections from './component/Scrollsection'
import VideoPlayer from './component/Vedio'
import TestimonialSection from './component/TestimonialSection'
import LegoraHeroSection from './component/JoinUsSection'
import Footer from './component/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
    
      <Hero />
      <PrincipleCard />
      <FeatureSection />
      <ScrollableSections />
      <VideoPlayer videoUrl="/AI Workflow Handshake.mp4" />
      <TestimonialSection />
      <LegoraHeroSection />
      <Footer />
      
      {/* Footer can be added here if needed */}
    </div>
  )
}

export default Home