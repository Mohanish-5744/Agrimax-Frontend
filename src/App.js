import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './Auth/Login';
import SignInForm from './Auth/SignUp';
import News from './News/News'
import Home from './Screens/Home';
import Phome from './Profile/Phome'
import ContactUs from './ContactUs/ContactUs';
import Loan from './Loan/Loan';
import RegisterFarmer from './FarmerInformation/RegisterFarmer';
import CropDet from './CropInformation/CropDat';
import MouseTracker from './MouseTracer/MouseTracker';
import './Table.css'
import PredicationHome from './Prediction/PredictionHome';
import PredictionResult from './Prediction/PredictionResult';
import Aboutus from './aboutus/aboutus';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<LoginForm />}></Route>
          <Route exact path='/signUp' element={<SignInForm />}></Route>
          <Route exact path='/Home' element={<Home />}></Route>
          <Route exact path='/News' element={<News />}></Route>
          <Route exact path='/Phome' element={<Phome />}></Route>
          <Route exact path='/ContactUs' element={<ContactUs />}></Route>
          <Route exact path='/Loan' element={<Loan />}></Route>
          <Route exact path='/RegisterFarmer' element={<RegisterFarmer />}></Route>
          <Route exact path='/CropDet' element={<CropDet />}></Route>
          <Route exact path='/predictionHome' element={<PredicationHome />}></Route>
          <Route exact path='/predictionResult' element={<PredictionResult />}></Route>
          <Route exact path='/aboutus' element={<Aboutus />}></Route>
        </Routes>
      </Router>
      <MouseTracker></MouseTracker>
    </div>
  );
}

export default App;
