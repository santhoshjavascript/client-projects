import { useState } from "react";
import ProductSummary from "./ProductSummary/ProductSummary";

function Cart() {
  const [currentStep, setCurrentStep] = useState(1);

  function nextStep() {
    setCurrentStep((prev) => prev + 1);
  }

  function prevStep() {
    setCurrentStep((prev) => prev - 1);
  }

  return (
    <div>
      {currentStep === 1 && <ProductSummary nextStep={nextStep} />}
      {currentStep === 2 && <ProductSummary prevStep={prevStep} />}
      {currentStep === 3 && <ProductSummary prevStep={prevStep} />}
    </div>
  );
}

export default Cart;
