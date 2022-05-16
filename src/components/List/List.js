import "./List.css";

export default function List({ numbersList }) {
  return (
    <ul className="list">
      {numbersList.map((number, i) => (
        <li className="item" key={i}>
          {number}
        </li>
      ))}
    </ul>
  );
}
