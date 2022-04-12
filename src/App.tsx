import {GlobalStyle} from './GlobalStyle';
import React from 'react';
import Root from './pages/root/Root';

function App(): JSX.Element {
    return (
        <>
            <GlobalStyle/>
            <Root/>
        </>

    );
}

export default App;
