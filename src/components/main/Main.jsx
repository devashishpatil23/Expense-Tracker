import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary/Summary";
import ExpenseView from "../expense-view/ExpenseView";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

function Main() {
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransaction,
  } = useContext(GlobalContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let income = 0;
    let expense = 0;
    allTransaction.forEach((item) =>
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount))
    );
    setTotalIncome(income);
    setTotalExpense(expense);
  }, [allTransaction]);
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
          <Button
            bg={"blue.400"}
            color={"black"}
            mx={"auto"}
            my={"3"}
            onClick={onOpen}
          >
            Add New trasaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        totalExpense={totalExpense}
        totalIncome={totalIncome}
        isOpen={isOpen}
        onClose={onClose}
      />
      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          type="income"
          data={allTransaction.filter((item) => item.type === "income")}
        />
        <ExpenseView
          type="expense"
          data={allTransaction.filter((item) => item.type === "expense")}
        />
      </Flex>
    </Flex>
  );
}

export default Main;
