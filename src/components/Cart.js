import React, { useState } from "react";
import {
  Typography,
  Box,
  Card,
  Grid,
  CardContent,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { Quantifier } from "./Cart/Quantifier";
import DeleteIcon from "@mui/icons-material/Delete";

const useSXStyles = () => ({
  cartWrapper: {
    padding: "100px 20px",
  },
  title: {
    marginBottom: "20px",
  },
  cardWrapper: {
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "primary.light",
  },
  productTitle: {
    fontWeight: "bold",
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
  priceWrapper: {
    marginTop: "20px",
    fontWeight: "bold",
  },
  deleteButton: {
    display: "block",
    marginRight: 0,
    marginLeft: "auto",
    marginBottom: "-20px",
  },
  totalNumber: {
    textAlign: "right",
  },
  totalTitle: {
    marginBottom: "20px",
  },
  totalContent: {
    marginBottom: "20px",
  },
  cashierButton: {
    marginTop: "30px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  emptyText: {
    textAlign: "center",
    marginTop: "30px",
  },
  modalWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  modalContent: {
    marginTop: "20px",
  },
  removeButton: {
    marginTop: "20px",
  },
});

function Cart({ selectedProducts, setSelectedProducts }) {
  const sxStyles = useSXStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const [productId, setProductId] = useState();
  const handleOpenDialog = (productId) => {
    setOpenDialog(true);
    setProductId(productId);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProducts(
      selectedProducts.filter((product) => product.id !== productId)
    );
    setOpenDialog(false);
    console.log(productId);
  };

  const handleUpdateQuantity = (productId, operation) => {
    if (selectedProducts.some((cartItem) => cartItem.id === productId)) {
      setSelectedProducts((selectedProducts) =>
        selectedProducts.map((cartItem) =>
          cartItem.id === productId
            ? operation === "increase"
              ? {
                  ...cartItem,
                  amount: cartItem.amount + 1,
                }
              : {
                  ...cartItem,
                  amount: cartItem.amount - 1,
                }
            : cartItem
        )
      );
      return;
    }
  };

  const countPrice = (amount, price) => {
    return amount * price;
  };

  const subTotal = selectedProducts.reduce(
    (total, item) => total + item.products.price * item.amount,
    0
  );

  const totalAmount = subTotal + 6;

  if (selectedProducts.length > 0) {
    return (
      <Box component="div" sx={sxStyles.cartWrapper}>
        <Typography variant="h4" sx={sxStyles.title}>
          ShoppingCart
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            {selectedProducts.map((cart) => (
              <Card key={cart.id} sx={sxStyles.cardWrapper}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={5}>
                      <img
                        src={cart.img}
                        alt={cart.name}
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={7}>
                      <Typography variant="h6" sx={sxStyles.productTitle}>
                        {cart.name}
                      </Typography>

                      <Box sx={sxStyles.quantityBox}>
                        <Typography variant="body2">
                          {cart.products.quantity}gr
                        </Typography>
                      </Box>

                      <Quantifier
                        maxValue={cart.products.stock}
                        amount={cart.amount}
                        removeProductCallback={handleRemoveProduct}
                        productId={cart.id}
                        handleUpdateQuantity={handleUpdateQuantity}
                      />
                      <Typography variant="body1" sx={sxStyles.priceWrapper}>
                        {countPrice(cart.amount, cart.products.price)}€
                      </Typography>
                      <Button
                        sx={sxStyles.deleteButton}
                        onClick={() => handleOpenDialog(cart.id)}
                      >
                        <DeleteIcon color="error" />
                      </Button>
                      <Dialog
                        open={openDialog}
                        onClose={handleCloseDialog}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Warning!"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Clicking the "Delete" button will permanently remove
                            selected items from your cart;
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={() => handleRemoveProduct(productId)}
                            variant="contained"
                            color="error"
                            autoFocus
                          >
                            Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={5}>
            <Card sx={sxStyles.cardWrapper}>
              <CardContent>
                <Typography variant="h5" sx={sxStyles.totalTitle}>
                  <b>Total amount</b>
                </Typography>
                <Grid container>
                  <Grid item xs={10}>
                    <Typography variant="body2" sx={sxStyles.totalContent}>
                      Subtotal
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sx={sxStyles.totalNumber}>
                    {subTotal}€
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={10}>
                    <Typography variant="body2" sx={sxStyles.totalContent}>
                      Shipping costs
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sx={sxStyles.totalNumber}>
                    6€
                  </Grid>
                </Grid>
                <Divider sx={sxStyles.totalContent} />
                <Grid container>
                  <Grid item xs={10}>
                    <Typography variant="body2">
                      <b>Total amount (incl. 24% VAT)</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sx={sxStyles.totalNumber}>
                    {totalAmount}€
                  </Grid>
                </Grid>
                <Button variant="contained" sx={sxStyles.cashierButton}>
                  Go to cashier
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box component="div">
        <Typography variant="body1" sx={sxStyles.emptyText}>
          Your cart is currently empty
        </Typography>
      </Box>
    );
  }
}

export default Cart;
