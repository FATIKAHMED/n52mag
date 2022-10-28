import { Container } from '@mui/system'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import InnerSection from '../components/Updated_components/Inner_section/Inner_section';
import Navbar from '../components/Updated_components/Navbar';
import image5 from "../components/Updated_components/Assets/img5.png"
import ContinuedLanding from '../components/Updated_components/ContinuedLanding/ContinuedLanding';
import dot from "../components/Updated_components/Assets/img4.png"
import magnet1 from "../components/Updated_components/Assets/badge1.png";
import magnet2 from "../components/Updated_components/Assets/badge2.png";
import magnet3 from "../components/Updated_components/Assets/badge3.png";




function LandingPage() {
  return (
<>
<Helmet>
    <title>LandingPage | Minimal -ui</title>
</Helmet>
<Container>
    
    <Navbar/>
    <InnerSection  image={image5} altertext= "LandingPageImage" />
    <ContinuedLanding dots ={dot} badge1={magnet1} badge2={magnet2} badge3={magnet3} />
</Container>
</>
  )
}

export default LandingPage