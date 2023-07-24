import React, { useState } from "react";
import { Tabs, Tab, Typography, Box, Grid } from "@mui/material";
import data from "./../data.json";
import ProductContent from "./Products/ProductContent";

const useSXStyles = () => ({
  boxWrapper: {
    padding: "100px 20px",
   
  },
  mainTitle: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  itemsWrapper: {
    marginTop: "50px",
  },
  itemWrapper: {
    marginBottom: "100px",
  },
  productTitle: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  productDescription: {
    marginBottom: "30px",
    lineHeight: "2em",
  },
  productPrice: {
    marginTop: "20px",
  },
  addButton: {
    marginTop: "30px",
    "&:hover": {
      boxShadow: "5px 10px 8px #888888",
    },
  },
  quantityBox: {
    backgroundColor: "secondary.main",
    border: "1px solid secondary.main",
    color: "text.light",
    width: "fit-content",
    padding: "10px 15px",
    borderRadius: "10px",
    marginBottom: "30px",
    marginTop: "20px",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
function Products({ handleSelectedProduct }) {
  const sxStyles = useSXStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const groundCoffeeData = data.filter((data) => data.type === "Ground Coffee");
  const instantCoffeeData = data.filter(
    (data) => data.type === "Instant Coffee"
  );
  const coffeeBeansData = data.filter((data) => data.type === "Coffee Beans");

  return (
    <>
      <Box sx={sxStyles.boxWrapper}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="Ground Coffee" {...a11yProps(0)} />
              <Tab label="Instant Coffee" {...a11yProps(1)} />
              <Tab label="Coffee Beans" {...a11yProps(2)} />
            </Tabs>
          </Grid>
          <Grid item xs={10}>
            <TabPanel value={value} index={0}>
              <ProductContent
                title="Ground Coffee"
                caption="Savor the perfect cup of coffee with our finely ground coffee. Carefully crafted from premium beans, our ground coffee delivers a rich and flavorful experience that is sure to delight your senses. Whether you prefer a bold and robust brew or a smooth and balanced cup, our ground coffee offers versatility and convenience without compromising on quality. Elevate your coffee ritual and enjoy the unmistakable aroma and taste that our ground coffee brings to every sip."
                data={groundCoffeeData}
                sxStyles={sxStyles}
                handleSelectedProduct={handleSelectedProduct}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ProductContent
                title="Instant Coffee"
                caption="Experience the ultimate convenience and full-bodied flavor with our instant coffee. Made from carefully selected coffee beans, our instant coffee delivers a quick and satisfying cup with just a splash of hot water. Perfect for those on the go or looking for a fuss-free coffee fix, our instant coffee provides the same rich taste and aroma as freshly brewed coffee. Embrace the ease without compromising on quality and enjoy a delightful coffee experience wherever you are."
                data={instantCoffeeData}
                sxStyles={sxStyles}
                handleSelectedProduct={handleSelectedProduct}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ProductContent
                title="Coffee Beans"
                caption="Experience coffee at its finest with our premium Coffee Beans. Sourced from the best coffee-growing regions around the world, our carefully selected beans promise an exceptional and unforgettable coffee experience. Discover a diverse range of flavors and aromas, from bold and robust to smooth and balanced, crafted to perfection by our expert roasters. Elevate your coffee ritual and indulge in the true essence of coffee with our premium Coffee Beans. It's time to savor the richness and complexity that only freshly ground coffee can offer."
                data={coffeeBeansData}
                sxStyles={sxStyles}
                handleSelectedProduct={handleSelectedProduct}
              />
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Products;
