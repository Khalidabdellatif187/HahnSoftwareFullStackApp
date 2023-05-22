
import './App.css';
import EmployeeCrudOperationsComponent from './components/EmployeeCrudOperationsComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent/>
      <div className="container">
        <Routes>
          <Route exact path="/" Component={ListEmployeeComponent}></Route>
          <Route path="/employees" Component={ListEmployeeComponent}></Route>
          <Route path="/add-employee" Component={EmployeeCrudOperationsComponent }></Route>
          <Route path="/edit-employee/:id" Component={EmployeeCrudOperationsComponent }></Route>
        </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
