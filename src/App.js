import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Bio from './Components/Bio';
import Website from './Components/Website.js';
import Training from './Components/Training';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {},
  gridTile: {
    width: '100% !important',
    height: '200px !important',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container
        maxWidth="sm"
        style={{ paddingLeft: '0px', paddingRight: '0px' }}
      >
        <GridList spacing={0} className={classes.gridList}>
          <GridListTile className={classes.gridTile}>
            <Bio />
          </GridListTile>
          <GridListTile className={classes.gridTile}>
            <Website />
          </GridListTile>
          <GridListTile className={classes.gridTile}>
            <Training />
          </GridListTile>
        </GridList>
      </Container>
    </div>
  );
}

export default App;
