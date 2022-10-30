import './MainTitle.css'

function MainTitle(props) {
    return (
        <h1 className="main__title">
            {props.children}
        </h1>
    )
}

export default MainTitle