import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.modules.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  if (!confirmed) {
    return <h2>Loading</h2>;
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.3}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active cases of COVID19
              </Typography>
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.3}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of recoveries from COVID19
              </Typography>
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.3}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of deaths from COVID19
              </Typography>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
