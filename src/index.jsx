import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import App from './App';
import './assets/style/App.css';
import Layout from './components/layout/layout'
import * as serviceWorker from './serviceWorker';


const children = [
    {
        path: '/nav11',
        component: ()=> <div>ocr识别历史</div>,
        meta: {
            name: 'ocr识别历史',
            icon: ''
        },
    }
]

{/*<React.StrictMode>*/}
{/*<App />*/}
{/*</React.StrictMode>,*/}
ReactDOM.render(
    <Layout children={children}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
