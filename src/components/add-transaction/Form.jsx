import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";

function Form({ onClose, isOpen }) {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useContext(GlobalContext);
  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Eneter Description</FormLabel>
              <Input
                placeholder="Enter Transaction description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Eneter Amout</FormLabel>
              <Input
                placeholder="Enter Transaction amount"
                name="amount"
                type="numer"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt={"5"} value={value} onChange={setValue}>
              <Radio
                checked={formData.type === "income"}
                colorScheme="blue"
                value="income"
                name="type"
                onChange={handleFormChange}
              >
                Income
              </Radio>
              <Radio
                checked={formData.type === "expense"}
                ml={"4"}
                colorScheme="blue"
                value="expense"
                name="type"
                onChange={handleFormChange}
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={"4"}>
              Cancel
            </Button>
            <Button onClick={onClose} type="submit">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

export default Form;
