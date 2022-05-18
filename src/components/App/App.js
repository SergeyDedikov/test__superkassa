import { useState, useEffect } from "react";

import "./App.css";
import Form from "../Form/Form";
import Section from "../Section/Section";
import List from "../List/List";
import api from "../../utils/apiPhones";

export default function App() {
  const [onLoad, setOnLoad] = useState(false);
  const [numbersList, setNumbersList] = useState([]);

  // -- Первоначальный рендер
  useEffect(() => {
    api
      .deleteMovie()
      .then((res) => {
        setOnLoad(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function onSendData(newNumber) {
    setNumbersList([newNumber, ...numbersList]);
  }

  return onLoad ? (
    <>
      <Section name="form">
        <Form onSendData={onSendData} />
      </Section>
      <Section name="table">
        <List numbersList={numbersList} />
      </Section>
    </>
  ) : null;
}
