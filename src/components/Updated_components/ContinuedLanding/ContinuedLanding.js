import { Padding } from '@mui/icons-material';
import Button from '@mui/material/Button';

import { Typography, Stack, Grid } from '@mui/material';
import React from 'react';

import './ContinuedLanding.css';
import magandhooks from './ContinuedAssets/magnetAndHooks.png';
import hooks from './ContinuedAssets/fishinghook.png';
import umagnets from './ContinuedAssets/Umagnet.png';
import ropes from './ContinuedAssets/ropes.png';
import glove from './ContinuedAssets/gloves.png';
import tags1 from './ContinuedAssets/tag1.png';
import tags2 from './ContinuedAssets/tag2.png';
import tags3 from './ContinuedAssets/tag3.png';

function ContinuedLanding(props) {
  return (
    <>
      <Typography
        varient="h3"
        component="h4"
        sx={{ padding: '45px 1px 1px 1px' }}
        fontSize="56px"
        fontWeight="800"
        color="#292F75"
      >
        PRODUCT FEATURES
        <img className="dotimg" src={props.dots} alt={props.dotimage} />
      </Typography>

      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, md: 2 }}>
        <Grid xs={4}>
          <img className="magnet-picture1" src={props.badge1} alt={props.badges} />
        </Grid>
        <Grid xs={4}>
          <img className="magnet-picture2" src={props.badge2} alt={props.badges} />
        </Grid>
        <Grid xs={4}>
          <img className="magnet-picture3" src={props.badge3} alt={props.badges} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <h4 className="n52">
            N52
            <span className="sp1">
              THE
              <br />
            </span>{' '}
            <span className="sp2">
              STRONGEST RARE <br /> EARTH MAGNET
            </span>
          </h4>
          <div className=" para_div ">
            <p className="para">
              Sign up to be one of our magnet fishers and get 10% off your first order! 5% of all our proceeds goes to
              the Semper Fi and America’s Fund for injured members of the military.
            </p>
          </div>
          <Button variant="contained" className="primary_button">
            LEARN MORE
          </Button>
        </Grid>
        <Grid item xs={6} md={6}>
          <img src={magandhooks} alt="magnets and hooks" />
        </Grid>
        <Grid container spacing={2} padding="40px" bgcolor="white" margin="40px" border sx={{ border: '20px' }}>
          <Grid item xs={3} md={3} flex justifyContent="center" alignItems="center" height="auto">
            <img className="fishing_hook" src={hooks} alt="hooks" />
            <Typography varient="h3" component="h4" fontSize="28px" fontWeight="500" textAlign="center">
              Powerfull Trident Hook
            </Typography>
            <Typography component="p" fontSize="18px" fontWeight="300" textAlign="center">
              We are committed to bringing the best magnet fishing gear to the market! If you are not 100% satisfied,
              contact us and we will make it right!
            </Typography>
          </Grid>
          <Grid item xs={3} md={3} flex justifyContent="center" alignItems="center" height="auto">
            <img className="fishing_hook" src={umagnets} alt="hooks" />
            <Typography varient="h3" component="h4" fontSize="28px" fontWeight="500" textAlign="center">
              Magnets
            </Typography>
            <Typography component="p" fontSize="18px" fontWeight="300" textAlign="center">
              When looking for a strong magnet for any type of use, strength is one of the biggest factors.
            </Typography>
          </Grid>
          <Grid item xs={3} md={3} flex justifyContent="center" alignItems="center" height="auto">
            <img className="fishing_hook" src={ropes} alt="hooks" />
            <Typography varient="h3" component="h4" fontSize="28px" fontWeight="500" textAlign="center">
              Strong ropes
            </Typography>
            <Typography component="p" fontSize="18px" fontWeight="300" textAlign="center">
              You don't have to worry because we stand behind our gear and guarantee your satisfaction.
            </Typography>
          </Grid>
          <Grid item xs={3} md={3} flex justifyContent="center" alignItems="center" height="auto">
            <img className="gloves" src={glove} alt="hooks" />
            <Typography varient="h3" component="h4" fontSize="28px" fontWeight="500" textAlign="center">
              High quality gloves
            </Typography>
            <Typography component="p" fontSize="18px" fontWeight="300" textAlign="center">
              With a pulling force of 2625lbs, (1190kg combined), our exclusive magnet can handle just about any of your
              magnet fishing needs!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Typography
            variant="h1"
            component="h3"
            fontSize="56px"
            fontWeight="800"
            color="#292F75"
            textAlign="center"
            textTransform="uppercase"
          >
            Neodymium magnets are the strongest of rare earth magnets
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography component="p" fontSize="18px" fontWeight="300" color="#303642">
            N52 magnetics is one of the few brands that’s honest about providing top quality magnets without
            exaggerating their pull force. All N52 magnets possess the Neodymium, Iron, and Boron alloy material.
            Furthermore, the N52 Magnet’s Nickel Copper Nickel (NiCuNi) coating protects from corrosion and loss in pull
            force.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default ContinuedLanding;
