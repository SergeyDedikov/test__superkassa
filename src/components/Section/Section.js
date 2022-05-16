import "./Section.css";

export default function Section(props) {
  return (
    <section className="section" aria-label={props.name}>
      {props.children}
    </section>
  );
}
