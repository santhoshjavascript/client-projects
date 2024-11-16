import styles from "./AddressForm.module.css";
import { Button } from "@chakra-ui/react";

function AddressForm({ nextStep }) {
  return (
    <div className={styles.addressFormBox}>
      <Button colorScheme="blue" size="lg">
        Click Me
      </Button>
    </div>
  );
}

export default AddressForm;
