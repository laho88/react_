
const Hello = (props) => {
    const propsIn = props;
    console.log("propsIn", propsIn)

    return(
        <div>
            <h1>The word of the day is: {propsIn.string}</h1>
        </div>
    )
}

export default Hello;