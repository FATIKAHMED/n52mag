import React from "react";

import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";

import "./Inner_section.css";
import fullimage from "../Assets/img3.png";

function InnerSection(props) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={7} md={6}>
        <h4 className="n52">
            N52
            <span className="sp1">
              THE
              <br />
            </span>{" "}
            <span className="sp2">
              STRONGEST RARE <br /> EARTH MAGNET
            </span>
          </h4>
          <div className=" para_div ">
            <p className="para">
              Sign up to be one of our magnet fishers and get 10% off your first
              order! 5% of all our proceeds goes to the Semper Fi and America’s
              Fund for injured members of the military.
            </p>
          </div>
          <Button variant="contained" className="primary_button">
            BUY NOW
          </Button>

          <h3 className="magnets_action">
            SEE OUR MAGNETS
            <br />
            IN ACTION
          </h3>
          <img className="dotimg" src={props.dots} alt="{props.dotimage}"/>
        </Grid>
        <Grid item xs={5} md={6}>
        <img className="picture" src={props.image} alt={props.altertext} />
          <div className=" para_div">
             <p className="para2">
               Magnet fishers often regret purchasing cheap magnets. Why? Brands
               can’t sell quality magnets for low prices without losing money.
               Therefore, some brands advertise their magnets as having higher
               pull forces than they truly have. For example, they claim their
               magnet has <span className="sp3">1000 lbs</span> of pull force
               when it only has <span className="sp3">500 lbs</span>. Or they use
               poor quality raw material.
             </p>
          </div>
        </Grid>
       
      </Grid>
      <Stack spacing={2}>
        

      <img  className="videohere" src={fullimage} alt="video here"/>
        
      </Stack>
      
    </>
  );
}
export default InnerSection;
