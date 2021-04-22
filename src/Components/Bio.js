import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ProfileImage from '../avatar.jpg';
import Background from '../image 2.png';
import Instagram from '../Instagram.png';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
    //backgroundColor: '#1CBECB',
    justifyContent: 'center',
    height: '-webkit-fill-available',
    paddingTop: '40px',
    textAlign: '-webkit-center',
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
  },
  backgroundImage: {
    position: 'absolute',
    width: '-webkit-fill-available',
    height: '170px',
    top: '30px',
  },
  badge: {
    display: 'block',
  },
}));

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 32,
    height: 32,
    top: '-18px',
    position: 'relative',
    left: '-48px',
  },
}))(Avatar);

export default function Bio() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        className={classes.backgroundImage}
        alt="background"
        src={Background}
      />
      <Typography variant="button" display="block" gutterBottom>
        {' '}
        <Badge
          className={classes.badge}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={<SmallAvatar alt="Remy Sharp" src={Instagram} />}
        >
          <Avatar
            alt="Remy Sharp"
            src={ProfileImage}
            className={classes.large}
          />
        </Badge>
        @qa_automation_pj
      </Typography>
    </div>
  );
}
