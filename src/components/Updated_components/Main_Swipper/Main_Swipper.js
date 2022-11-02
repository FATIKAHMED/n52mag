import React from 'react'

import { container, Grid, Box, Typography } from '@mui/material';



import tags1 from './Main_Swipper_Assets/tag1.png';
import tags2 from './Main_Swipper_Assets/tag2.png';
import tags3 from './Main_Swipper_Assets/tag3.png';
import whitetag1 from './Main_Swipper_Assets/whitemag1.png';
import whitetag2 from './Main_Swipper_Assets/whitemag2.png';
import whitetag3 from './Main_Swipper_Assets/whitemag3.png';
import redtag1 from './Main_Swipper_Assets/redmag1.png';
import redtag2 from './Main_Swipper_Assets/redmag2.png';
import redtag3 from './Main_Swipper_Assets/redmag3.png';
import badge1 from './Main_Swipper_Assets/badge1.png'
import badge2 from './Main_Swipper_Assets/badge2.png'
import badge3 from './Main_Swipper_Assets/badge3.png'


import Swipper from '../Swipper/Swipper';


const badge= [badge1,badge2,badge3];
const tags = [tags1, tags2, tags3];
const whitetags=[whitetag1,whitetag2,whitetag3]
const redtags=[redtag1,redtag2,redtag3]


function Main_Swipper() {
  return (
   <>
   <Grid Container spacing={2}>
     <Grid item xs={4}>
        <Swipper  blueMagnet={tags}  thumnail={badge}  altText="text" />
     </Grid>


   </Grid>
   </>
  )
}

export default Main_Swipper