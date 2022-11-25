import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import AuthLayout from '../layout/AuthLayout';

const formData = {
  email: 'fede.lemaire@gmail.com',
  password: '1234567',
  displayName: 'Fefe Lemaire',
};

const formValidations = {
  email: [
    (value) => value.includes('@'),
    'The email address must be a valid email address',
  ],
  password: [
    (value) => value.length >= 6,
    'The password must be at least 6 characters long',
  ],
  displayName: [
    (value) => value.length >= 1,
    'The display name must be a valid',
  ],
};

const RegisterPage = () => {
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(formState);
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="John Doe"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="mail@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Your Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} to="/auth/login">
              Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
