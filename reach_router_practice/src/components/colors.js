import React, {useState} from 'react';

const Colors = (props) => {
    const propsIn = props;
    const [counter, setCounter] =useState(0);
    
    const handleClicker = () => {
        setCounter(counter + 1)
    }
    return(
        <div style={{background: `${propsIn.color1}`}}>
            <h1>Do this:</h1>
            <p>- change the url parameters above and "enter" to update the page:</p>
            <p>- change 'hi' to any word.</p>
            <p>- play with the colors as well, yellow to red, blue to pink ect</p>
            <h4>Dont forget to mash that button below to subscribe!</h4>
            <h3><span style={{fontWeight: "bold", color: propsIn.color2}}>{propsIn.string}</span> </h3>
            <button onClick={handleClicker}>Subscribers:</button>
            <h3>{counter}</h3>
        </div>
    )
}

export default Colors;