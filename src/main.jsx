import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import Store from './page/Store.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={Store}>
    <App />
    </Provider>

)
