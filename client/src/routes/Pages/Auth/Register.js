import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { FormControl, Grid, Typography, TextField } from '@mui/material';

// Services connect to our backend server
import Mongo from '../../../services/mongo';

const Register = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleName = (e) => {
    const newName = e.target.value
    setName(newName)
  }

  const handleEmail = (e) => {
    const newEmail = e.target.value
    setEmail(newEmail)
  }

  const handlePassword = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch to Mongo service
  }


  return (
    <FormControl>
      <TextField required id="name" label="Name" variant="standard" value={name} onChange={handleName}/>
      <TextField required id="email" label="Email" variant="standard" value={email} onChange={handleEmail}/>
      <TextField required id="password" label="Password" variant="standard" value={password} onChange={handlePassword}/>
    </FormControl>


    // </Grid>
    // </Grid>
  );
};

export default Register;