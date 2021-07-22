import React, { useState, useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/CartContext";
import { computeHeadingLevel } from "@testing-library/react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputAmount = useRef();

  const handelSubmitForm = (event) => {
    event.preventDefault();
    const enteredAmount = inputAmount.current.value;
    const eneteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      eneteredAmountNumber < 1 ||
      eneteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(eneteredAmountNumber);
  };

  return (
    <form onSubmit={handelSubmitForm} className={classes.form}>
      <Input
        ref={inputAmount}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <button type="sumbit">+ Add</button>
      {!amountIsValid && <p>please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
