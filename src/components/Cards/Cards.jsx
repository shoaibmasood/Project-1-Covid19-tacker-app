import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { IconContext } from 'react-icons';
import { FaHospitalAlt, FaHeartbeat, FaBed } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards = ({
  data: { active, confirmed, recovered, deaths, date },
  loader,
}) => {
  // console.log(loader);
  if (!active || undefined) {
    return <BeatLoader size={24} color="MEDIUMPURPLE" loading />;
  }

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
              <CountUp start={0} end={confirmed} duration={2.5} separator="," />
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
              <CountUp start={0} end={active} duration={2.5} separator="," />
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
              <CountUp start={0} end={recovered} duration={2.5} separator="," />
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
              <CountUp start={0} end={deaths} duration={2.5} separator="," />
            </Typography>
            <Typography className={styles.deathcases}>{newDate}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
