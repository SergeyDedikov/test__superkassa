import "./List.css";

export default function List({ numbersList }) {
  return (
    <ul className="list">
      {numbersList.map((item, i) => (
        <li className="item" key={i}>
          {item.code}{item.number}
        </li>
      ))}
    </ul>
  );
}
