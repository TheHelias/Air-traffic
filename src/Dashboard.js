import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TransitionsModal from './Modal';
import TransitionsModalSecond from './Modal2'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: 0,
    width: `100%`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const ARRIVAL_URL = 'https://Thelias:password@opensky-network.org/api/flights/arrival?airport=';
const THIRTY_MINUTES_URL = '&begin=1517227200&end=1517229000';
const DEPARTURE_URL = 'https://opensky-network.org/api/flights/departure?airport=';
const ONE_HOUR_URL = '&begin=1517227200&end=1517230800';

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
     
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <h2>Los Angeles International Airport, Los Angeles</h2>
              <TransitionsModal 
                  ARRIVAL_API= {`${ARRIVAL_URL}KLAX${THIRTY_MINUTES_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}KLAX${THIRTY_MINUTES_URL}`}/>
                  <TransitionsModalSecond
                  ARRIVAL_API= {`${ARRIVAL_URL}KLAX${ONE_HOUR_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}KLAX${ONE_HOUR_URL}`}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <h2>Hartsfield–Jackson Atlanta International Airport, Atlanta</h2>
              <TransitionsModal 
                  ARRIVAL_API= {`${ARRIVAL_URL}KATL${THIRTY_MINUTES_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}KATL${THIRTY_MINUTES_URL}`}/>
                     <TransitionsModalSecond
                  ARRIVAL_API= {`${ARRIVAL_URL}KATL${ONE_HOUR_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}KATL${ONE_HOUR_URL}`}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <h2>O'Hare International Airport, Chicago</h2>
              <TransitionsModal 
                  ARRIVAL_API= {`${ARRIVAL_URL}KORD${THIRTY_MINUTES_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}KORD${THIRTY_MINUTES_URL}`}/>
                    <TransitionsModalSecond
                  ARRIVAL_API= {`${ARRIVAL_URL}KORD${ONE_HOUR_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}KORD${ONE_HOUR_URL}`}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <h2> Hong Kong International Airport, Chek Lap Kok</h2>
              <TransitionsModal 
                  ARRIVAL_API= {`${ARRIVAL_URL}VHHH${THIRTY_MINUTES_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}VHHH${THIRTY_MINUTES_URL}`}/>
                    <TransitionsModalSecond
                  ARRIVAL_API= {`${ARRIVAL_URL}VHHH${ONE_HOUR_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}VHHH${ONE_HOUR_URL}`}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <h2> Seoul Incheon International Airport, Incheon</h2>
              <TransitionsModal 
                ARRIVAL_API= {`${ARRIVAL_URL}RKSI${THIRTY_MINUTES_URL}`}
                DEPARTURE_API={`${DEPARTURE_URL}RKSI${THIRTY_MINUTES_URL}`}/>
                  <TransitionsModalSecond
                  ARRIVAL_API= {`${ARRIVAL_URL}RKSI${ONE_HOUR_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}RKSI${ONE_HOUR_URL}`}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <h2>Frankfurt Airport,	Frankfurt</h2>
              <TransitionsModal 
                  ARRIVAL_API= {`${ARRIVAL_URL}EDDF${THIRTY_MINUTES_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}EDDF${THIRTY_MINUTES_URL}`}/>

              <TransitionsModalSecond
                  ARRIVAL_API= {`${ARRIVAL_URL}EDDF${ONE_HOUR_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}EDDF${ONE_HOUR_URL}`}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <h2>Barcelona–El Prat Airport,	Barcelona</h2>
              <TransitionsModal 
                  ARRIVAL_API= {`${ARRIVAL_URL}LEBL${THIRTY_MINUTES_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}LEBL${THIRTY_MINUTES_URL}`}/>

                  <TransitionsModalSecond
                  ARRIVAL_API= {`${ARRIVAL_URL}LEBL${ONE_HOUR_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}LEBL${ONE_HOUR_URL}`}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <h2>Toronto Pearson International Airport,	Mississauga</h2>
              <TransitionsModal 
                  ARRIVAL_API= {`${ARRIVAL_URL}CYYZ${THIRTY_MINUTES_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}CYYZ${THIRTY_MINUTES_URL}`}/>

                  <TransitionsModalSecond
                  ARRIVAL_API= {`${ARRIVAL_URL}CYYZ${ONE_HOUR_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}CYYZ${ONE_HOUR_URL}`}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <h2>Toronto Airport, Toronto</h2>
              <TransitionsModal 
                  ARRIVAL_API= {`${ARRIVAL_URL}CYYZ${THIRTY_MINUTES_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}CYYZ${THIRTY_MINUTES_URL}`}/>

                  <TransitionsModalSecond
                  ARRIVAL_API= {`${ARRIVAL_URL}CYYZ${ONE_HOUR_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}CYYZ${ONE_HOUR_URL}`}/>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
              <h2>Charles de Gaulle International Airport,	France</h2>
              <TransitionsModal 
                  ARRIVAL_API= {`${ARRIVAL_URL}LEPG${THIRTY_MINUTES_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}LEPG${THIRTY_MINUTES_URL}`}/>

                  <TransitionsModalSecond
                  ARRIVAL_API= {`${ARRIVAL_URL}LEPG${ONE_HOUR_URL}`}
                  DEPARTURE_API={`${DEPARTURE_URL}LEPG${ONE_HOUR_URL}`}/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Copyright />
      </main>
    </div>
  );
}