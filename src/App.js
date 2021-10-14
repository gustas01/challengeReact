import React from "react";
import Login from './components/pagina_login/tela_login'
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import './App.css'

export default function App(){
    return (
        <BrowserRouter>
            <div id="app">
                <Routes/>
            </div>
        </BrowserRouter>
    )
}