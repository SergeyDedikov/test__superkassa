import "./Section.css"

export default function Section(props) {
  return (
    <section className="section" aria-label={props.children.name}>
      {props.children}
    </section>
  )
}
