import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./styles/index.css"

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement);

root.render(
<div>
<Navbar/>
<Main />
<Footer />
</div>
);

