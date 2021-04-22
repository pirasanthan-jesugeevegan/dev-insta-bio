import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    backgroundColor: '#79C2C8',
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
    color: '#11848D',
  },
  subTitle: {
    position: 'absolute',
    top: '45px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '28px',
    color: '#FFFFFF',
  },
  profile: {
    position: 'absolute',
    // width: '96.58px',
    top: '67px',
    height: '130px',
    right: 'calc(50% - 140px/2 + 118.88px)',
    borderRadius: '6px',
    transform: 'rotate(-16.87deg);',
  },
  description: {
    position: 'absolute',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    // textAlign: 'center',
    color: '#FFFFFF',
  },
  button: {
    height: 'max-content',
    top: '110px',
    backgroundColor: '#1CBECB',
    width: '100px',
    //borderRadius: '10px',
  },
}));

export default function Training() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.title}>Training</span>

      <span className={classes.subTitle}>by softwaretestinghelp.org</span>

      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={1}>
            <Grid item>
              <span
                style={{
                  width: 'min-content',
                  top: '90px',
                  marginLeft: '20px',
                }}
                className={classes.description}
              >
                ISTQB study Package
              </span>
              <Button
                href="https://www.e-junkie.com/ecom/gb.php?ii=1279609&cl=235496&c=ib&aff=379361"
                className={classes.button}
                variant="contained"
                color="primary"
              >
                DOWNLOAD
              </Button>
            </Grid>
            <Grid item>
              <span
                style={{
                  width: 'min-content',
                  top: '100px',
                  marginLeft: '20px',
                }}
                className={classes.description}
              >
                Career Package
              </span>
              <Button
                href="https://www.e-junkie.com/ecom/gb.php?ii=1188557&cl=235496&c=ib&aff=379361"
                className={classes.button}
                variant="contained"
                color="primary"
              >
                DOWNLOAD
              </Button>
            </Grid>
            <Grid item>
              <span
                style={{
                  width: 'min-content',
                  top: '90px',
                  marginLeft: '20px',
                }}
                className={classes.description}
              >
                Online Training Course
              </span>
              <Button
                href="https://www.e-junkie.com/ecom/gb.php?ii=1259341&cl=235496&c=ib&aff=379361"
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Book
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <span
        style={{
          top: '175px',
          fontSize: '6px',
        }}
        className={classes.description}
      >
        Disclaimer: Please note these links are suggestions and your responsable
        for your purchases
      </span>
    </div>
  );
}
