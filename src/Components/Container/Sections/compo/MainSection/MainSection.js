const Section = (props => {
    return (
        <section className={props.class} id={props.Uniq}>
            {props.children}
        </section>
    )
})
export default Section