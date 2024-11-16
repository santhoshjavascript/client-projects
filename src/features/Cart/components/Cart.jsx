// import styles from "./Cart.module.css";
import { useState } from "react";
import AddressForm from "./AddressForm/AddressForm";
import Checkout from "./Checkout/Checkout";
import ProductSummary from "./ProductSummary/ProductSummary";

function Cart() {
  const [step, setStep] = useState(1);

  function nextStep() {
    setStep(step + 1);
  }

  // function prevStep() {
  //   setStep(step - 1);
  // }

  return (
    <div>
      {step === 1 && <ProductSummary nextStep={nextStep} />}
      {step === 2 && <AddressForm nextStep={nextStep} />}
      {step === 3 && <Checkout />}
    </div>
  );
}

export default Cart;
