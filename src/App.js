import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RestaurantContextProvider from './context/RestaurantContext';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Detail from './components/Detail';
import Footer from './components/Footer';

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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
