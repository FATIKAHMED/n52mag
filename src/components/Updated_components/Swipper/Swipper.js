import React from 'react';
import Slider from 'react-slick';
import { Container, Grid, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


import './Swipper.css';
import round from './SwipperAssets/Ellipse.png';
import umagnet from './SwipperAssets/Group.png';




const CustomBox = styled(Box)(({ theme }) => ({
  '& .slick-dots li': {
    width: '71px',
    height: '71px',
    Padding:"20px 5px 5px 5px",
    margin: "10px",
  },
  '& .slick-slide img':{
        width:"373px",
        height:"337px",
        margin:"10px",
        Padding:"45px",
  },
}));

function Swipper(props) {
  const settings = {
    customPaging: function (i) {
      return (
          <>   
        <a>
          <img src={props.blueMagnet[i]} alt={props.altText} />

        </a>
          </>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb ',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <>
     
          <CustomBox>
            <Slider {...settings}>
              <div>
                <img  src={tags1} alt={props.altText} />
              </div>
              <div>
                <img  src={tags2} alt={props.altText} />
              </div>
              <div>
                <img src={tags3} alt={props.altText} />
              </div>
            </Slider>
          </CustomBox>
          {/* <Typography varient="h1" component="h3"
          fontSize="28px"
          fontWeight="600"
          lineHeight="36px"
          textAlign="center"
          padding="30px"
          >
             BLUE SINGLE SIDE MAGNETS
          </Typography>
          <Box sx={{display:"flex",justifyContent:"left", alignItems:"left"}}  >
             <img className='round_image' src={round} alt='bullet point' />
             <Typography component="p"
             fontSize="18px"
             fontWeight="400"
             color="#303642"
             padding="15px"
             alignItems="center"
               >
             Diameter: 90 mm
             </Typography>
          </Box>
          <Box sx={{display:"flex",justifyContent:"left", alignItems:"center"}}  >
             <img className='round_image' src={umagnet} alt='bullet point' />
             <Typography component="p"
             fontSize="18px"
             fontWeight="400"
             color="#303642"
             padding="15px"
              
               >
             Pull Force: 1000 lbs
             </Typography>
          </Box> */}
       
    </>
  );
}

export default Swipper;
