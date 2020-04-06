
import Tesseract from 'tesseract.js'
import React from 'react';
import './assets/style/App.css';
import Layout from './components/layout/layout'


// Tesseract.recognize(
//     'https://tesseract.projectnaptha.com/img/eng_bw.png',
//     'eng',
//     {
//         // logger: m => console.log(m)
//     }
// ).then(({ data: { text } }) => {
//   console.log(text);
// })

const children = [
    {
        path: '/nav11',
        component: ()=> <div>商品列表11</div>,
        meta: {
            name: '商品列表11',
            icon: ''
        },
    },
    {
        path: '/nav12',
        component: ()=> <div>商品列表12</div>,
        meta: {
            name: '商品列表12',
            icon: ''
        },
    },
]

function App() {
  return (
      <Layout />
  );
}

export default App;
