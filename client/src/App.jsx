import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppState from './context/app/state';
import ThemeProvider from './context/theme-context/theme-context';
import { navigation } from './router/navigation';
import './App.css';
import baseUrl from './api/baseUrl';
function App() {
  console.log(import.meta.env.VITE_BASE_URL)
  const demo = async () => {
    const response = await fetch(baseUrl + '/transaction');
    const data = await response.json();
    console.log(data);
  }
  demo(); 
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
