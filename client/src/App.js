import React from 'react';
import {Typography, Drawer, makeStyles} from '@material-ui/core';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const drawerWidth = 240

const useStyles = makeStyles( {
  page: {
    background: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  root: {
    display: 'flex'
  }
})

const App = () => {
  const classes = useStyles()
  return (
      <div className = {classes.root}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper: classes.drawerPaper}}>
              <div>
                <Typography variant="h5">
                  Video Chat
                </Typography>
              </div>
          </Drawer>
          <VideoPlayer />
          <Options>
            <Notifications/>
          </Options>
      </div>
  )
}

export default App;