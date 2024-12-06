import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import { publicRouter } from '../routes';
import Layout from '../layout';
import { Fragment } from 'react';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            
            const Page = route.Component;
            let Layout1 = Layout;

            if(route.Layout){
              Layout1 = route.Layout;
            }else if (route.Layout === null) {
              Layout1 = Fragment
            }
            return <Route key={index} path={route.path} element={<Layout1> <Page /></Layout1>} />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
