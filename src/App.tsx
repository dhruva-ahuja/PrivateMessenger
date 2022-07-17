import './App.css';
import * as React from 'react';
import LabelBottomNavigation from './Components/Navigation';
import TemporaryDrawer from './Components/Drawer';
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
    return (
      <>
        <BrowserRouter>
          <TemporaryDrawer />
          <LabelBottomNavigation/>
        </BrowserRouter>
      </>
    );
}
export default App;


function setValue(newValue: any) {
  value = newValue;
}

let value  = 6;
