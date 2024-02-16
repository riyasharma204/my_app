import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import Grid from "@mui/material/Grid";
import "../App.css";

function GridCard() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
     'Page A',
     'Page B',
     'Page C',
     'Page D',
     'Page E',
     'Page F',
     'Page G',
    ];

  return (
    <React.Fragment>
       <Box component="main" sx={{ flexGrow: 1, mt: 11 }}>
        <Grid
          container
          spacing={3}
          sx={{ mt: "10", maxWidth: "100%", height: "100%" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Card
                raised
                sx={{
                  maxWidth: "100%",
                  margin: "0 auto",
                  padding: "0.1em",
                  borderRadius: 6,
                }}
              >
                <CardContent className="gradient">
                  <Typography variant="h4">987,459</Typography>
                  <br />
                  <Typography>Total Website Traffics</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                raised
                sx={{
                  maxWidth: "100%",
                  margin: "0 auto",
                  padding: "0.1em",
                  borderRadius: 6,
                }}
              >
                <CardContent className="gradient2">
                  <Typography variant="h4">356,785K</Typography>
                  <br />
                  <Typography>Total Website Impressions</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                raised
                sx={{
                  maxWidth: "100%",
                  margin: "0 auto",
                  padding: "0.1em",
                  borderRadius: 6,
                }}
              >
                <CardContent className="gradient3">
                  <Typography variant="h4">$58,778</Typography>
                  <br />
                  <Typography>Total Online Sales</Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                raised
                sx={{
                  height: 50 + "vh",
                  width: "100%",
                  borderRadius: 6,
                }}
              >
                <BarChart
                    series={[
                    { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Series A1' },
                    { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
                    { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
                    { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
                    { data: [10, 6, 5, 8, 9], label: 'Series C1' },
                    ]}
                    width={600}
                    height={350}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                raised
                sx={{
                  height: 50 + "vh",
                  width: "100%",
                  borderRadius: 6,
                }}
              >
               <LineChart
                  width={500}
                  height={300}
                  series={[
                   { data: pData, label: 'pv' },
                   { data: uData, label: 'uv' },
                  ]}
                     xAxis={[{ scaleType: 'point', data: xLabels }]}
                />  
              </Card>
            </Grid>
            {/* <Stack spacing={7} direction="row"> */}

            {/* </Stack> */}
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default GridCard
