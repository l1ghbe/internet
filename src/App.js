import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignForm from './components/SignForm/SignForm';


function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/services' exact component={Services}/>
                <Route path='/sign-up' exact component={SignForm}/>
            </Switch>
        </Router>
    );
}

export default App;