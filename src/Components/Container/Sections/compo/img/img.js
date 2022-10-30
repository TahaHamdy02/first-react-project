import './img.css'

const img = (props) => {
    return (
        <img src={props.i} alt={props.a} className={props.c} />
    )
}

export default img