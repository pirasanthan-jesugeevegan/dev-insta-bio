import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Profile from '../Capture.PNG';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    backgroundColor: '#11848D',
    justifyContent: 'center',
    height: '250px',
    paddingTop: '25px',
    textAlign: '-webkit-center',
  },
  title: {
    position: 'absolute',
    top: '0px',
    fontFamily: 'Rouge Script',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '48px',
    lineHeight: '56px',
    color: '#1CBECB',
  },
  subTitle: {
    position: 'absolute',
    top: '45px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '23px',
    lineHeight: '28px',
    color: '#FFFFFF',
  },
  profile: {
    position: 'absolute',
    width: '92px',
    top: '5px',
    height: '80px',
    left: 'calc(50% - 117px/2 + 118.88px)',
    boxShadow: '4px 4px 15px 1px rgba(0, 0, 0, 0.4)',
    borderRadius: '6px',
    transform: 'rotate(7.2deg)',
  },
  description: {
    position: 'absolute',
    width: '313px',
    height: '56px',

    top: '80px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10px',
    lineHeight: '12px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  button: {
    height: 'max-content',
    top: '115px',
    backgroundColor: '#1CBECB',
    width: '161px',
  },
}));

export default function Website() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.title}>Hello</span>
      <img
        src={Profile}
        className={classes.profile}
        alt="Profile imange"
      />{' '}
      <span className={classes.subTitle}>I’m Pirasanth</span>
      <p className={classes.description}>
        I love to; program, write automation scripts, travel, and lift heavy
        things. I have currently nestled myself into a niche for building
        automation script and still have an interest in developing web
        applications
      </p>
      <Button
        href="http://pirasanth.com/"
        className={classes.button}
        variant="contained"
        color="primary"
      >
        VIST MY WEBSITE
      </Button>
    </div>
  );
}
