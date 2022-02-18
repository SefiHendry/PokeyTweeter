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
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useHistory } from "react-router";
import Axios from "axios";
import { makeStyles } from "@mui/styles";





const useStyles = makeStyles((theme) => ({

  InputLabelProps: {
    style: { color: "red" },
  },
  boxColor: {
    backgroundColor: "#313131",
    color: "white",
  },
}));

const FormLogin = () => {
  const classes = useStyles();
  const [UserPasswordvalues, setUserPasswordValues] = useState({
    password: "",
    showPassword: false,
  });
  const [userNameValue, setUserNameValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3006/login", {
      userName: userNameValue,
      userPassword: UserPasswordvalues.password,
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("id", response.data.id);
        history.push("/");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

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
  const commonStyles = {
    m: 1,
    border: 1,
    borderRadius: 16,
    height: 40,
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
          <Box
            className={classes.boxColor}
            sx={{
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ...commonStyles,
            }}
            style={{
              width: 350,
              height: 300,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, marginBottom: 3, marginTop: 3 }}
            >
              Login to your acount:
            </Typography>
            <Grid item xs={12}>
              <FormControl variant="outlined">
                <InputLabel
                  style={{
                    color: "white",
                  }}
                  htmlFor="outlined-adornment-text"
                >
                  Username
                </InputLabel>
                <OutlinedInput
                  style={{
                    color: "white",
                  }}
                  sx={commonStyles}
                  id="username"
                  label="username"
                  fullWidth
                  type="text"
                  onChange={(event) => {
                    setUserNameValue(event.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <AccountCircleIcon
                          style={{
                            color: "white",
                          }}
                        />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl variant="outlined">
                <InputLabel
                  style={{
                    color: "white",
                  }}
                  htmlFor="outlined-adornment-password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  style={{
                    color: "white",
                  }}
                  sx={commonStyles}
                  id="password"
                  label="Password"
                  fullWidth
                  type={UserPasswordvalues.showPassword ? "text" : "password"}
                  value={UserPasswordvalues.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        style={{
                          color: "white",
                        }}
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
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{ width: 280, marginLeft: 30 }}
                variant="contained"
                sx={commonStyles}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Grid>
            <span className="form-input-register">
              <Link
                style={{
                  color: "white",
                }}
                href=""
                onClick={() => history.push("/register")}
              >
                register
              </Link>
            </span>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default FormLogin;
