import React from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPosition: {
    boxSizing: 'border-box',
    color: 'blue'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [allData, setData] = React.useState({ arrivalData:'', departureData:'' });
  // const [answer, setAnswer] = React.useState();
  React.useEffect(() => {
    const Data = async () => {
      const arrival = await Axios(
        props.ARRIVAL_API,
      );
      const departure = await Axios(
        props.DEPARTURE_API,
      );
      setData({ arrivalData: arrival.data, departureData: departure.data });
    };
    Data();
  }, []);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
      <AirplanemodeActiveIcon className={classes.buttonPosition}/>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Arriving flights in the last 10 minutes</h2>
            <ul>
              {allData.arrivalData && allData.arrivalData.map((item) => (
              <li key={item.callsign}>
              <p>ICAO: {item.icao24}</p>
              <p>Call Sign: {item.callsign}</p>
              <AirplanemodeActiveIcon />
        </li>
      ))}
    </ul>
    <h2>Departing flights in the last 10 minutes</h2>
    <ul>
              {allData.departureData && allData.departureData.map((item) => (
              <li key={item.callsign}>
              <p>ICAO: {item.icao24}</p>
              <p>Call Sign: {item.callsign}</p>
              <AirplanemodeActiveIcon />
        </li>
      ))}
    </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
