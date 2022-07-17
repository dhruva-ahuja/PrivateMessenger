import './App.css';
import * as React from 'react';
import LabelBottomNavigation from './Components/Navigation';
import TemporaryDrawer from './Components/Drawer';

function App() {
    return (
      <>
        <TemporaryDrawer />
        <LabelBottomNavigation/>
      </>
    );
}
export default App;


function setValue(newValue: any) {
  value = newValue;
}

let value  = 6;
