import { useState } from "react";

import "./App.css";
import Form from "../Form/Form";
import Section from "../Section/Section";
import List from "../List/List";

export default function App() {
  const [numbersList, setNumbersList] = useState([]);

  function onSendData(newNumber) {
    setNumbersList([newNumber, ...numbersList]);
  }
  return (
    <>
      <Section name="form">
        <Form onSendData={onSendData} />
      </Section>
      <Section name="table">
        <List numbersList={numbersList} />
      </Section>
    </>
  );
}
