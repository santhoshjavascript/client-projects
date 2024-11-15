import { useState } from "react";
import ProductSummary from "./ProductSummary/ProductSummary";
import AddressForm from "./AddressForm/AddressForm";

function Cart() {
  const [currentStep, setCurrentStep] = useState(1);

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  function prevStep() {
    setCurrentStep(currentStep - 1);
  }

  return (
    <div>
      {currentStep === 1 && <ProductSummary nextStep={nextStep} />}
      {currentStep === 2 && <AddressForm prevStep={prevStep} />}
      {currentStep === 3 && <ProductSummary prevStep={prevStep} />}
    </div>
  );
}

export default Cart;
