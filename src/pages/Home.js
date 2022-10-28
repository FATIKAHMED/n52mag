import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
import Navbar from '../components/Updated_components/Navbar';
import imgg from '../components/Updated_components/Assets/img2.png'

import InnerSection from '../components/Updated_components/Inner_section/Inner_section';
import dot from "../components/Updated_components/Assets/img4.png"

// Camel Case innerSection
// Pascal Case InnerSection

// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <Helmet>
        <title> Home | Minimal UI </title>
      </Helmet>

      <Container>
        <Navbar/>
        <InnerSection image = {imgg} altertext="HomePagePicture" dots={dot} dotimage="dotsimage" />
        <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="h3" paragraph>
            Home!
          </Typography>
        </StyledContent>
      </Container>
    </>
  );
}
