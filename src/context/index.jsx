import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "",
    amount: null,
    description: "",
  });

  const [value, setValue] = useState();
  const [totalExpense, setTotalExpense] = useState();
  const [totalIncome, setTotalIncome] = useState();
  const [allTransaction, setAllTransaction] = useState([]);

  function handleFormSubmit(currentFormData) {
    console.log(currentFormData);
    if (!currentFormData.description || !currentFormData.amount) return;

    setAllTransaction([
      ...allTransaction,
      { ...currentFormData, id: Date.now() },
    ]);
  }
  console.log(allTransaction);

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransaction,
        setAllTransaction,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
