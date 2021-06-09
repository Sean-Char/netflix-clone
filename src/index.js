import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';


const config = {
    apiKey: 'AIzaSyDWNMYLM9tMc8RuUtbe6GgSCOZ9frF3xZs',
    authDomain: 'netflix-wanabe.firebaseapp.com',
    projectId: 'netflix-wanabe',
    storageBucket: 'netflix-wanabe.appspot.com',
    messagingSenderId: '163761610992',
    appId: '1:163761610992:web:9d0752790609db35d8a235'
};

const firebase = window.firebase.initializeApp(config);


ReactDOM.render(
        <>
            <FirebaseContext.Provider value={{ firebase: firebase }}>
                <GlobalStyles />
                <App />
            </FirebaseContext.Provider>
        </>
    , document.getElementById('root'));
