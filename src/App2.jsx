import React from 'react';
import Heading from './Heading';
import Head from './Head';

const heading = 'photos';

function App2(){
    return (
    <>
        { (heading === 'photo') ? <Heading /> : <Head />}
    </>
    );
}

export default App2;