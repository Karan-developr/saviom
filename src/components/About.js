import react from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

function About() {
  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <img
            src="./images/pmentre-about-us-page-banner.webp"
            alt="about-us"
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src="./images/about-pmentire-img.webp"
              alt="about-us"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0,0.1)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
              About PMEntire
            </Typography>
            <Typography variant="body1">
              PMEntire software empowers professional service organizations to
              reach new levels of efficiency and profitability. With over 20
              years of industry experience, our PSA tool is designed to help
              businesses overcome the challenges of the 2020s and beyond. Some
              of them include global competition, market volatility, business
              uncertainties, and more.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              History
            </Typography>
            <Typography variant="body1">
              Saviom is the brainchild of 4 passionate and visionary
              entrepreneurs who aspired to develop a product for increasing
              business efficiency. Starting as a bootstrapped business in 1999
              from a Sydney suburban garage, today we are a name to reckon with
              in resource management.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src="./images/history-about-us.webp"
              alt="about-us"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0,0.1)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src="./images/Our-Innovation-about-us.webp"
              alt="about-us"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0,0.1)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Our Innovation
            </Typography>
            <Typography variant="body1">
              At PMEntire, we constantly innovate and develop futuristic
              solutions to help our customers achieve greater operational
              efficiency and productivity. Besides, our intuitive solutions
              enable businesses to forecast and be proactive. Starting as
              pioneers in resource management, today, our products are several
              years ahead of the market.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
