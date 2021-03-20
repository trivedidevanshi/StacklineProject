import React from "react";
import {Provider} from 'react-redux';

import store from "./redux/store";
import './App.css';
import ProductsContainer from "./components/ProductsContainer";
import stackline_logo from './images/stackline_logo.svg';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className='AppHeader'><img src={stackline_logo} alt="Stackline"/></header>
                <ProductsContainer></ProductsContainer>
            </div>
        </Provider>
    );
}

export default App;
