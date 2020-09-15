import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Components/Chat';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import Welcome from './Components/Welcome';
import DemoInfo from './Components/DemoInfo';

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        )
          : (<>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Switch>
                <Route path="/room/about-demo">
                  <DemoInfo />
                </Route>
                <Route path={["/room/title","/title"]}> 
                  <DemoInfo />
                </Route>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Welcome />
                </Route>

              </Switch>
            </div>
          </>)
        }
      </Router>
    </div>
  );
}

export default App;
