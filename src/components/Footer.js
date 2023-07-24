import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assests/logo.png";

const useSXStyles = () => ({
  boxWrapper: {
    backgroundColor: "primary.main",
    color: "text.light",
    padding: "20px",
  },
  sameRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "20px",
  },
  icon: {
    marginRight: "15px",
  },
  floatRight: {
    display: "block",
    marginRight: 0,
    marginLeft: "auto",
  },
  logo: {
    width: "50%",
  },
  logoWrapper: {
    marginLeft: "20px",
    display: "block",
    marginTop: "auto",
    marginBottom: "auto",
  },
});

function Footer() {
  const sxStyles = useSXStyles();
  return (
    <Box component="div" sx={sxStyles.boxWrapper}>
      <Grid container>
        <Grid item xs={5} sx={sxStyles.logoWrapper}>
          <img src={logo} alt="logo" style={sxStyles.logo} />
        </Grid>
        <Grid item xs={5} sx={sxStyles.floatRight}>
          <Box component="div" sx={sxStyles.sameRow}>
            <LocationOnIcon fontSize="small" sx={sxStyles.icon} />
            <Typography variant="caption">
              Lorem Ipsum 20 C, 90000 Oulu, Finland
            </Typography>
          </Box>
          <Box component="div" sx={sxStyles.sameRow}>
            <PhoneIcon fontSize="small" sx={sxStyles.icon} />
            <Typography variant="caption">040 100 0000</Typography>
          </Box>
          <Box component="div" sx={sxStyles.sameRow}>
            <EmailIcon fontSize="small" sx={sxStyles.icon} />
            <Typography variant="caption">040 100 0000</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
