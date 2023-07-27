import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppState from './context/app/state';
import { navigation } from './router/navigation';
import './App.css';

function App() {
  const demo = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/calculation/total-expense ');
      console.log("Hello World");
      const data = await response.json();
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  }
  demo();
  return (
    <AppState>
      <Router>
        <Routes>
          {navigation.map((item, index) => {
            return (
              <Route
                key={index}
                path={item.path}
                element={<>{item.component}</>}
              />
            );
          })}
        </Routes>
      </Router>
    </AppState>
  );
}

export default App;
