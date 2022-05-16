import "./Form.css";
import { regionCodes } from "../../utils/const";
import { useState } from "react";

export default function Form() {
  const [selectedRegion, setSelectedRegion] = useState(regionCodes[0].code);
  const [inputNumber, setInputNumber] = useState("");
  console.log(selectedRegion, inputNumber);

  function handleChangeS(evt) {
    setSelectedRegion(evt.target.value);
  }

  function handleChangeN(evt) {
    setInputNumber(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(`${selectedRegion}${inputNumber}`);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset>
        <select name="select" value={selectedRegion} onChange={handleChangeS}>
          <option value={regionCodes[0].code}>
            {regionCodes[0].region}: {regionCodes[0].code}
          </option>
          <option value={regionCodes[1].code}>
            {regionCodes[1].region}: {regionCodes[1].code}
          </option>
          <option value={regionCodes[2].code}>
            {regionCodes[2].region}: {regionCodes[2].code}
          </option>
        </select>
        <label htmlFor="phone">
          <small>Введите номер телефона: </small>
          <input
            onChange={handleChangeN}
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3,10}"
            required
          />
          <small>Format: 1234567890</small>
        </label>
      </fieldset>

      <input type="submit" value="Отправить" className="button-submit"/>
    </form>
  );
}
