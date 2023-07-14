import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import {navigation} from "./router/navigation";

function App() {
  return (
      <Router>   
          <Routes>
           fsfsdfdsfsdf
            {navigation.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <>
                      {item.component}
                    </>
                  }
                />
              );
            })}
          </Routes>
      </Router>
      );
}

export default App;
