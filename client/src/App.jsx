import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppState from './context/app/state';
import { navigation } from './router/navigation';
import './App.css';

function App() {
  const demo = async () => {
    const res = await fetch("https://finance-app-bunny-lover-ebeaf04be2db.herokuapp.com/api/transaction")
    const data = await res.json();
    console.log(data);
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
