import "./Form.css";
import { regionCodes } from "../../utils/const";
import { useFormWithValidation } from "../../hooks/form-validation";
import { useEffect } from "react";

export default function Form({ onSendData }) {
  const { values, setValues, handleChange, errors, isValid } =
    useFormWithValidation();

  useEffect(() => {
    setValues({ ...values, select: regionCodes[0].code });
  }, []);

  function getItemRegion(num) {
    return `${regionCodes[num].region}: ${regionCodes[num].code}`;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!isValid) {
      console.log(errors);
    } else {
      onSendData(`${values.select}${values.phone}`);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="phone">Введите номер телефона:</label>

      <fieldset>
        <select name="select" onChange={handleChange}>
          <option value={regionCodes[0].code}>{getItemRegion(0)}</option>
          <option value={regionCodes[1].code}>{getItemRegion(1)}</option>
          <option value={regionCodes[2].code}>{getItemRegion(2)}</option>
        </select>
        <input
          onChange={handleChange}
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3,10}"
          required
        />
        <span className="form__error">
          <small>{!isValid && errors.phone ? errors.phone : ""}</small>
        </span>
      </fieldset>

      <input type="submit" value="Сохранить" className="button-submit button" />
    </form>
  );
}
