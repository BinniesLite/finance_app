import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppState from './context/app/state';
import { navigation } from './router/navigation';
import './App.css';

function App() {
  
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
