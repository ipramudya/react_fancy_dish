import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantContextProvider from './context/RestaurantContext';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Detail from './components/Detail';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Banner />
        <RestaurantContextProvider>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/detail/:id' component={Detail} />
          </Switch>
        </RestaurantContextProvider>
      </div>
    </Router>
  );
}

export default App;
