import React, { useMemo } from 'react';
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import AuthLayout from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({
    email: 'fede.lemaire@gmail.com',
    password: 'fede1909',
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch the new action here

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="mail@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
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
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid display={!!errorMessage ? '' : 'none'} item xs={12}>
              <Alert severity="error"> {errorMessage} </Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} to="/auth/register">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
