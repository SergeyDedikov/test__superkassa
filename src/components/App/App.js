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
      .deleteAllPhones()
      .then((res) => {
        setOnLoad(true);
      })
      .catch((err) => console.log(err));
  }, []);

  // -- Добавим номер в БД и отрисуем в списке
  function onSendData(data) {
    api
      .createPhone(data)
      .then((newNumber) => {
        setNumbersList((state) => [...state, newNumber]);
      })
      .catch((err) => console.log(err));
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
