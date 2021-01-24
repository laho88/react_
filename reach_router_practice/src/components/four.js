import {useState} from 'react';
import { createPortal } from 'react-dom';
import Colors from './colors';

const Four = (props) => {
    const propInt = Number(props.int);
    console.log("propsin Four:", typeof propInt);
    return(
        <div>
            <h3>We are passing the number <span style={{fontWeight: "bold", color: 'red'}}>{propInt}</span> through the url.</h3>
        </div>
    )
}

export default Four;