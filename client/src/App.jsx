import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { navigation } from './router/navigation';
import AppState from './context/app/state';
import ThemeProvider from './context/theme-context/theme-context';
import LayoutWrapper from '@/components/layout/wrapper/LayoutWrapper';
import AuthRoute from '@/router/AuthRoute';
import './App.css';
function App() {
  return (
    <ThemeProvider>
      <AppState>
        <Router>
          <Routes>
            {navigation.map((route, index) => {
              const {
                path,
                component: Component,
                isPrivate,
                noLayoutWrap,
              } = route;
              
              const element = isPrivate ? (
                <AuthRoute component={Component} noLayoutWrap={noLayoutWrap} />
              ) : noLayoutWrap ? (
                <Component />
              ) : (
                <LayoutWrapper>
                  <Component />
                </LayoutWrapper>
              );

              return <Route key={index} path={path} element={element} />;
            })}
          </Routes>
        </Router>
      </AppState>
    </ThemeProvider>
  );
}

export default App;
