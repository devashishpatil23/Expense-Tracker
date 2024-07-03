import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary/Summary";
import ExpenseView from "../expense-view/ExpenseView";

function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
      <Flex
        textAlign={"center"}
        justifyContent={"space-between"}
        mt={"12"}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Heading color={"blue.400"}>Expense Traker</Heading>
        <Flex alignItems={"center"}>
          <Button bg={"blue.400"} color={"black"} mx={"auto"} my={"3"} onClick={onOpen}>
            Add New trasaction
          </Button>
        </Flex>
      </Flex>
      <Summary isOpen={isOpen} onClose={onClose} />
      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  );
}

export default Main;
