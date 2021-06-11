import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';
import * as KEYS  from './config';

export const config = {
    apiKey: KEYS.MY_API_KEY,
    authDomain: KEYS.MY_DOMAIN,
    projectId: KEYS.MY_PROJECT,
    storageBucket: KEYS.MY_BUCKET,
    messagingSenderId: KEYS.MY_SENDER_ID,
    appId: KEYS.MY_SENDER_ID
}

const firebase = window.firebase.initializeApp(config);


ReactDOM.render(
        <>
            <FirebaseContext.Provider value={{ firebase: firebase }}>
                <GlobalStyles />
                <App />
            </FirebaseContext.Provider>
        </>
    , document.getElementById('root'));
