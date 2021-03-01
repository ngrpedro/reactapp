import { useEffect, useState } from "react";

import db from "../db";

import Bills from "../components/Bills";
import Header from "../components/Header";

export default function Home() {

  return (
    <>
      <Header />
      <div>
        <Bills
          description="Aluguel"
          paid={new Date()}
          dueDate="20/02/2021"
          amount="R$ 80,00"
        />
        <Bills
          description="Aluguel"
          paid={new Date()}
          dueDate="20/02/2021"
          amount="R$ 80,00"
        />
        <Bills
          description="Aluguel"
          paid={new Date()}
          dueDate="20/02/2021"
          amount="R$ 80,00"
        />
        <Bills
          description="Aluguel"
          paid={new Date()}
          dueDate="20/02/2021"
          amount="R$ 80,00"
        />
        <Bills
          description="Aluguel"
          paid={new Date()}
          dueDate="20/02/2021"
          amount="R$ 80,00"
        />
      </div>
    </>
  );
}
