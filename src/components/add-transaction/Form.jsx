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

function Form({ onClose, isOpen }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Eneter Description</FormLabel>
              <Input
                placeHolder="Enter Transaction description"
                name="description"
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Eneter Amout</FormLabel>
              <Input
                placeHolder="Enter Transaction amount"
                name="amount"
                type="numer"
              />
            </FormControl>
            <RadioGroup mt={"5"}>
              <Radio colorScheme="blue" value="income" name="type">
                Income
              </Radio>
              <Radio ml={"4"} colorScheme="red" value="expense" name="type">
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr={"4"}>
              Cancel
            </Button>
            <Button>Add</Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

export default Form;
