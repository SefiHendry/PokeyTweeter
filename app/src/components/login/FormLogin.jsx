import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import { useHistory } from "react-router";

const FormLogin = () => {
  const [UserPasswordvalues, setUserPasswordValues] = useState({
    password: "",
    showPassword: false,
  });
  const history = useHistory();
  const handleClickShowPassword = () => {
    setUserPasswordValues({
      ...UserPasswordvalues,
      showPassword: !UserPasswordvalues.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setUserPasswordValues({
      ...UserPasswordvalues,
      [prop]: event.target.value,
    });
  };
  return (
    <div className="form-content-right">
      <form className="form">
        <Box
          sx={{
            marginTop: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" 
            component="div" sx={{ flexGrow: 1 }}>
            Login to your acount:
          </Typography>
          <Grid item xs={12}>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-text">
                Username
              </InputLabel>
              <OutlinedInput
                id="username"
                label="username"
                fullWidth
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <AccountCircleIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
                label="Password"
                fullWidth
                type={UserPasswordvalues.showPassword ? "text" : "password"}
                value={UserPasswordvalues.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {UserPasswordvalues.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button fullWidth variant="contained">Login</Button>
          </Grid>
        </Box>
        <span className="form-input-register">
          <Link href="" onClick={()=> history.push("/register")}>register</Link>
        </span>
      </form>
    </div>
  );
};

export default FormLogin;
