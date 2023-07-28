import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppState from './context/app/state';
import ThemeProvider from './context/theme-context/theme-context';
import { navigation } from './router/navigation';
import './App.css';

function App() {
  
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
