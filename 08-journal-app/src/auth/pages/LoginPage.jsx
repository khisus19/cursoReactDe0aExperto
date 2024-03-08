import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

import { AuthLayout } from "../layout/AuthLayout";

import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";

export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "user@google.com",
    password: "123456",
  });

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( checkingAuthentication() );
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");

    dispatch( startGoogleSignIn() );
  };


  return (
    <AuthLayout title="Login!!">
      <form onSubmit={ onSubmit } >
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            >

            </TextField>
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            >

            </TextField>
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button onClick={ onGoogleSignIn } variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

        </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={ RouterLink } color="inherit" to="/auth/register">
              Create new account
            </Link>
          </Grid>
      </form>
    </AuthLayout>
  )
}