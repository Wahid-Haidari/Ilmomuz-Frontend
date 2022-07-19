import React, {useState} from 'react';

import './App.css';
import Menu from './components/menu/Menu';
import Dashboard from './components/dashboard/Dashboard';
import Students from './components/students/Students';
import Instructors from './components/instructors/Instructors';
import Groups from './components/groups/Groups';
import Income from './components/income/Income';
import Financial from './components/financial/Financial';
import Setting from './components/setting/Setting';



function App() {
  const [currentMenuOption , selectMenuOption] = useState('dashboard');
  
  return (
    <div className="App">
      <Menu selectMenuOption={selectMenuOption}/>
      {currentMenuOption ==='dashboard' && <Dashboard/>}
      {currentMenuOption ==='students' && <Students/>}
      {currentMenuOption ==='instructors' && <Instructors/>}
      {currentMenuOption ==='groups' && <Groups/>}
      {currentMenuOption ==='income' && <Income/>}
      {currentMenuOption ==='financial' && <Financial/>}
      {currentMenuOption ==='setting' && <Setting/>}
      
    </div>
  );
}

export default App;
