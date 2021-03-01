import Bills from "./components/Bills"

export default function BillsDB() {    
    type Bills =
        [
            {
              description: "Aluguel",
              paid: true,
              dueDate: "10/02/2021",
              amount: "R$ 800,00",
            },
            {
              description: "Água",
              paid: true,
              dueDate: "10/03/2021",
              amount: "R$ 80,00",
            },
            {
              description: "Energia",
              paid: true,
              dueDate: "10/03/2021",
              amount: "R$ 100,00",
            },
            {
              description: "Cartão Credito",
              paid: true,
              dueDate: "10/02/2021",
              amount: "R$ 500,00",
            },
            {
              description: "Água",
              paid: true,
              dueDate: "10/03/2021",
              amount: "R$ 800,00",
            },
            {
              description: "Energia",
              paid: true,
              dueDate: "10/03/2021",
              amount: "R$ 800,00",
            }
        ]
        return Bills;
    }


/* const Bill = {
    bills: () => {
      return [
        {
          description: "Aluguel",
          paid: true,
          dueDate: "10/02/2021",
          amount: "R$ 800,00",
        },
        {
          description: "Água",
          paid: true,
          dueDate: "10/03/2021",
          amount: "R$ 80,00",
        },
        {
          description: "Energia",
          paid: true,
          dueDate: "10/03/2021",
          amount: "R$ 100,00",
        },
        {
          description: "Cartão Credito",
          paid: true,
          dueDate: "10/02/2021",
          amount: "R$ 500,00",
        },
        {
          description: "Água",
          paid: true,
          dueDate: "10/03/2021",
          amount: "R$ 800,00",
        },
        {
          description: "Energia",
          paid: true,
          dueDate: "10/03/2021",
          amount: "R$ 800,00",
        },
      ];
    },
  };
  
  export default Bill; */
