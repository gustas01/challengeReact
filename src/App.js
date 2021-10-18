import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import './App.css'
import { Provider } from "react-redux";
import store from "./store";

export default function App(){
    return (
      
        <Provider store={store}>
            <BrowserRouter>
                <div id="app">
                    <Routes/>
                </div>
            </BrowserRouter>
        </Provider>
    )
}