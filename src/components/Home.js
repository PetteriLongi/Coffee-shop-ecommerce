import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import homeBackground from "../assests/homeBackground.png";
import coffeeBeans from "../assests/coffeebeans.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import data from "./../data.json";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const useSXStyles = () => ({
  background: {
    width: "100%",
    height: "70%",
  },
  card: {
    width: "45%",
    position: "absolute",
    backgroundColor: "primary.light",
    marginTop: "-50%",
    height: "fit-content",
    maxHeight: "45%",
    overflow: "auto",
    right: 0,
    opacity: "85%",
  },
  statisticCard: {
    maxWidth: "580px",
    marginTop: "-50px",
    backgroundColor: "primary.light",
    zIndex: 1,
    position: "absolute",
    marginLeft: "20px",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  gridProductWrapper: {
    margin: "20px 10px",
    width: "100%",
  },
  cardImg: {
    width: "448px",
    height: "300px",
  },
  productWrapper: {
    marginTop: "150px",
  },
  productMainTitle: {
    marginLeft: "15px",
    textTransform: "uppercase",
  },
  productCaption: {
    marginTop: "10px",
    marginLeft: "15px",
  },
  productTitle: {
    fontWeight: "bold",
    textOverflow: "ellipsis",
    overflow: "hidden",
    width: "100%",
    height: "1.2em",
    whiteSpace: "nowrap",
  },
  boxWrapper: {
    padding: '70px 0px'
  },
  exploreButton: {
    "&:hover": {
      boxShadow: "5px 10px 8px #888888",
    },
  },
  productButton: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    "&:hover": {
      boxShadow: "5px 10px 8px #888888",
    },
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  introWrapper: {
    marginTop: "80px",
  },
  productContentWrapper: {
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "primary.main",
    },
  },
  cartIcon: {
    "&:hover": {
      color: "text.light",
    },
  },
  introImg: {
    marginTop: "-20px",
    maxWidth: "100%",
  },
  introMainTitle: {
    marginBottom: "50px",
    width: "80%",
  },
  introCaption: {
    marginBottom: "40px",
  },
  introTitle: {
    marginBottom: "20px",
    fontWeight: "bold",
  },
  introSpace: {
    marginBottom: "30px",
  },
});

function Home({ handleSelectedProduct }) {
  const sxStyles = useSXStyles();
  console.log(data);
  return (
    <Box component='div' sx={sxStyles.boxWrapper}>
      <img
        src={homeBackground}
        alt="Home page background"
        style={sxStyles.background}
      />
      <Card sx={sxStyles.card}>
        <CardContent>
          <Typography variant="caption">
            Welcome to JPQuality Coffee, where coffee perfection awaits. Explore
            our three coffee offerings: freshly roasted, convenient instant, and
            premium coffee beans. From our carefully selected beans to expert
            craftsmanship, we're passionate about delivering an exceptional
            coffee experience. Join us on this flavorful journey and indulge in
            the art of coffee.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" sx={sxStyles.exploreButton}>
            <Link to="/products" style={sxStyles.link}>
              Explore more
            </Link>
          </Button>
        </CardActions>
      </Card>
      <Card sx={sxStyles.statisticCard}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4} sx={sxStyles.gridItem}>
              <Typography variant="h6">28%</Typography>
              <Typography variant="caption">Ground Coffee</Typography>
            </Grid>
            <Grid item xs={4} sx={sxStyles.gridItem}>
              <Typography variant="h6">30%</Typography>
              <Typography variant="caption">Instant Coffee</Typography>
            </Grid>
            <Grid item xs={4} sx={sxStyles.gridItem}>
              <Typography variant="h6">42%</Typography>
              <Typography variant="caption">Coffee Beans</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Box component="div" sx={sxStyles.productWrapper}>
        <Typography variant="h3" sx={sxStyles.productMainTitle}>
          Our products
        </Typography>
        <Typography variant="body1" sx={sxStyles.productCaption}>
          Discover the perfect brew with our exceptional range of skillfully
          roasted coffee, convenient instant options, and premium coffee beans.
        </Typography>
        <Grid container spacing={2} sx={{ margin: "20px 10px", width: "100%" }}>
          {data.map((product) => (
            <Grid item xs={3.85} key={product.id}>
              <Card sx={{ width: "100%" }}>
                <CardMedia
                  sx={sxStyles.cardImg}
                  image={product.img}
                  title={product.name}
                />
                {console.log(product.img)}
                <Grid container spacing={2}>
                  <Grid item xs={9}>
                    <CardContent>
                      <Typography variant="body2" sx={sxStyles.productTitle}>
                        {product.name}
                      </Typography>

                      <Typography variant="caption">
                        Price: {product.products.price}€
                      </Typography>
                    </CardContent>
                  </Grid>
                  <Grid item xs={3}>
                    <CardActions>
                      <Button
                        variant="outlined"
                        sx={sxStyles.productContentWrapper}
                        onClick={() => handleSelectedProduct(product)}
                      >
                        <ShoppingCartIcon
                          color="primary"
                          sx={sxStyles.cartIcon}
                        />
                      </Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" sx={sxStyles.productButton} size="large">
          <Link to="/products" style={sxStyles.link}>
            See more
          </Link>
        </Button>
      </Box>
      <Grid container spacing={2} sx={sxStyles.introWrapper}>
        <Grid item xs={5}>
          <img src={coffeeBeans} alt="coffee beans" style={sxStyles.introImg} />
        </Grid>
        <Grid items xs={7}>
          <Typography variant="h3" sx={sxStyles.introMainTitle}>
            TO MAKE YOUR TASTE BUDS BLOOM
          </Typography>
          <Typography variant="body2" sx={sxStyles.introCaption}>
            Coffee that goes from the rosater to the brewed cup in the shortest
            amount of time in the freshest, bast tasting coffee
          </Typography>
          <Box component="div">
            <Typography variant="h6" sx={sxStyles.introTitle}>
              Hand roasted to order
            </Typography>
            <Typography variant="body2" sx={sxStyles.introSpace}>
              Our beans aren’t roasted until you order them
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="h6" sx={sxStyles.introTitle}>
              Sealed for freshness
            </Typography>
            <Typography variant="body2" sx={sxStyles.introSpace}>
              Sealed after roasting and marked with the Freshness Stamp
            </Typography>
          </Box>
          <Box component="div">
            <Typography variant="h6" sx={sxStyles.introTitle}>
              Delivered fresh to you
            </Typography>
            <Typography variant="body2" sx={sxStyles.introSpace}>
              Coffee ship the same day they are roasted for peak flavor
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Home;
