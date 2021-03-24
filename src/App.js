import React from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';

import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border:0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }

});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 0,
    }
  },
  // palette: {
  //   primary: {
  //     main: green[400]
  //   },

  //   secondary: {
  //     main: orange[400]
  //   },

  // }

})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styles Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)}
        inputProps={
          {'aria-label': 'secondary checkbox'}
        }
      />}
      label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xlg">
      <div className="App">
        <header className="App-header">
          <AppBar>
            <ToolBar>
              <IconButton>

              </IconButton>
              <Typography variant="h6">
                MUI Theming
              </Typography>
            </ToolBar>
          </AppBar>
          <ButtonStyled />
          <Grid container spacing={2} justify="center">
            <Grid item lg={2} sm={2} xs={12}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
            <Grid item lg={2} sm={2} xs={12}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
            <Grid item lg={2} sm={2} xs={12}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
          </Grid>
          
          <CheckboxExample/>
          <ButtonGroup variant="contained" color="primary">
            <Button
              size="large"
            >
              Save
            </Button>
            <Button
              size="large"
            >
              Discard
            </Button>
          </ButtonGroup>
          
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
