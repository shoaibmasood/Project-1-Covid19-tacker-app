import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { IconContext } from 'react-icons';
import { FaHospitalAlt, FaHeartbeat, FaBed } from 'react-icons/fa';

// import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({ data: { active, confirmed, date, deaths, recovered } }) => {
  const newDate = new Date(date).toDateString();

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent className={styles.ConfirmedContent}>
            <IconContext.Provider value={{ size: '3em' }}>
              <FaHospitalAlt />
            </IconContext.Provider>
            <Typography color="textSecondary" gutterBottom>
              Confirmed
            </Typography>
            <Typography variant="h5" className={styles.confirmedcases}>
              {confirmed}
              {/* <CountUp start={0} end={confirmed} duration={2.5} /> */}
            </Typography>
            <Typography className={styles.confirmedcases}>{newDate}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent className={styles.ActiveContent}>
            <IconContext.Provider value={{ size: '3em', color: 'azure' }}>
              <FaHospitalAlt />
            </IconContext.Provider>
            <Typography color="textSecondary" gutterBottom>
              Active
            </Typography>
            <Typography variant="h5" className={styles.activecases}>
              {active}
            </Typography>
            <Typography className={styles.activecases}>{newDate}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent className={styles.RecoveredContent}>
            <IconContext.Provider value={{ size: '3em', color: 'red' }}>
              <FaHeartbeat />
            </IconContext.Provider>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" className={styles.recoveredcases}>
              {recovered}
            </Typography>
            <Typography className={styles.recoveredcases}>{newDate}</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent className={styles.DeathContent}>
            <IconContext.Provider value={{ size: '3em', color: 'white' }}>
              <FaBed />
            </IconContext.Provider>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" className={styles.deathcases}>
              {deaths}
            </Typography>
            <Typography className={styles.deathcases}>{newDate}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
