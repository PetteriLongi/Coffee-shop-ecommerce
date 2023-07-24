import { useState } from "react";

const useSXStyles = () => ({
  decreaseButton: {
    borderRadius: "10px 0px 0px 10px",
    backgroundColor: "transparent",
    padding: "5px 5px 5px 15px",
    borderRight: "none",
    borderColor: "black",
    borderWidth: "1px",
  },
  inputValue: {
    backgroundColor: "transparent",
    padding: "5px 10px",
    borderRight: "none",
    borderLeft: "none",
    width: "50px",
    textAlign: "center",
    borderColor: "black",
    borderWidth: "1px",
  },
  increaseButton: {
    borderRadius: "0px 10px 15px 0px",
    backgroundColor: "transparent",
    padding: "5px 10px 5px 5px",
    borderLeft: "none",
    borderColor: "black",
    borderWidth: "1px",
  },
});

export const Quantifier = ({
  maxValue,
  amount,
  removeProductCallback,
  handleUpdateQuantity,
  productId,
}) => {
  const sxStyles = useSXStyles();
  const [value, setValue] = useState(amount);

  const reduce = () => {
    handleUpdateQuantity(productId, "decrease");

    setValue((prevState) => {
      const updatedValue = prevState - 1;
      if (updatedValue === 0) {
        removeProductCallback(productId);
      }
      return updatedValue;
    });
  };

  const increase = () => {
    handleUpdateQuantity(productId, "increase");
    setValue((prevState) => prevState + 1);
  };

  return (
    <div>
      <input
        type="button"
        value="-"
        onClick={reduce}
        style={sxStyles.decreaseButton}
      />
      <input
        type="number"
        step="1"
        max={maxValue}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        style={sxStyles.inputValue}
        disabled
      />
      <input
        type="button"
        value="+"
        onClick={increase}
        disabled={value >= maxValue ? true : false}
        style={sxStyles.increaseButton}
      />
    </div>
  );
};
