export default function List({ numbersList }) {
  return (
    <ul>
      {numbersList.map((number, i) => (
        <li key={i}>{number}</li>
      ))}
    </ul>
  );
}
