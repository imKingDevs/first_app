import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App2 from './App2';
import Random from './Random';

function Rimg(props){
    return <><img src={props.isrc} alt={props.name} title={props.title} /></>
}

createRoot(document.querySelector('#root')).render(
    <>
        <App2 />
        <div className='images'>
            {Random.map((val, index) => {
                return (
                    <Rimg key={index} isrc={val.img} title={index+1} name={'Random' + (index+1)}/>
                )
            })}
        </div>
    </>
)