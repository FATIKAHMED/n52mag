import { Padding } from '@mui/icons-material'
import { Typography, Stack, Grid } from '@mui/material'
import React from 'react'

import "./ContinuedLanding.css"
import tags1 from "./ContinuedAssets/tag1.png";
import tags2 from "./ContinuedAssets/tag2.png";
import tags3 from "./ContinuedAssets/tag3.png";

function ContinuedLanding(props) {
  return (
      <>
      <Typography varient="h3" component="h4" sx={{padding:"45px 1px 1px 1px",}}
      fontSize="56px"
      fontWeight="800"
      color="#292F75"
      >
        PRODUCT FEATURES

     <img className="dotimg" src={props.dots} alt={props.dotimage}/>
    </Typography>

     <Grid container rowSpacing={2} columnSpacing={{xs:1,md:2}}>
        <Grid xs={4}>
           <img className='magnet-picture1' src={props.badge1} alt={props.badges}/>
           
        </Grid >
        <Grid xs={4}>
           <img className='magnet-picture2' src={props.badge2} alt={props.badges}/>
        </Grid>
        <Grid xs={4}>
          <img className='magnet-picture3' src={props.badge3} alt={props.badges}/>
        </Grid>
      </Grid>
        </>
  )
}

export default ContinuedLanding