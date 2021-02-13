import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SiteAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography href="/" variant="h6" className={classes.title}>
            TRU-TEX
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About Us</Button>
          <Button color="inherit" href="/equipment">Equipment</Button>
          <Button color="inherit" href="/contact">Contact</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}