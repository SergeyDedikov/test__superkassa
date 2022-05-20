import { useState, useEffect } from "react";

import "./App.css";
import Form from "../Form/Form";
import Section from "../Section/Section";
import List from "../List/List";
import api from "../../utils/apiPhones";

export default function App() {
  const [onLoad, setOnLoad] = useState(false);
  const [numbersList, setNumbersList] = useState([]);
  // -- Интервал времени запросов к серверу
  const [requestTimer, setRequestTimer] = useState(0);

  // -- Добавим номер в БД и отрисуем в списке
  function onSendData(data) {
    api
      .createPhone(data)
      .then((newNumber) => {
        setNumbersList((state) => [...state, newNumber]);
      })
      .catch((err) => console.log(err));
  }

  // -- Получение всех номеров из БД
  function getPhones() {
    api
      .getPhones()
      .then((phones) => {
        if (phones.length > 0) {
          setNumbersList(phones);
        }
      })
      .catch((err) => console.log(err));
  }

  // -- Первоначальный рендер
  //    с удалением номеров из базы
  //    и установкой интервала запросов в 10 сек
  useEffect(() => {
    api
      .deleteAllPhones()
      .then((res) => {
        setOnLoad(true);
      })
      .catch((err) => console.log(err));

    setRequestTimer(setInterval(getPhones, 10000));
    return () => clearInterval(requestTimer);
  }, []);

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
