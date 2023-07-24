import React from "react";

import { Box, Typography, Grid, Button } from "@mui/material";

function ProductContent({
  title,
  caption,
  data,
  sxStyles,
  handleSelectedProduct,
}) {
  return (
    <>
      <Typography variant="h4" sx={sxStyles.mainTitle}>
        {title}
      </Typography>
      <Typography variant="body1">{caption}</Typography>
      <Box component="div" sx={sxStyles.itemsWrapper}>
        {data.map((data) => (
          <Box component="div" key={data.id} sx={sxStyles.itemWrapper}>
            <Grid container spacing={3}>
              <Grid item xs={5}>
                <img src={data.img} alt={data.name} style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h6" sx={sxStyles.productTitle}>
                  {data.name}
                </Typography>
                <Typography variant="body1" sx={sxStyles.productDescription}>
                  {data.description}
                </Typography>
                <Box component="div">
                  <Box component="div" sx={sxStyles.quantityBox}>
                    {data.products.quantity}gr
                  </Box>
                  <Typography variant="body1" sx={sxStyles.productPrice}>
                    Price: {data.products.price}€
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={sxStyles.addButton}
                  onClick={() => handleSelectedProduct(data)}
                >
                  Add to card
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default ProductContent;
