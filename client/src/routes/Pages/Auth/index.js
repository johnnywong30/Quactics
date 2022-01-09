import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Grid } from '@mui/material';


import Register from './Register';

// Services connect to our backend server
import Mongo from '../../../services/mongo';

const Auth = () => {
  const dispatch = useDispatch();
  

  return (
    //   <Register/>
    // <Grid container spacing={2}>
        <Register />
    // </Grid>
 
  );
};

export default Auth;
