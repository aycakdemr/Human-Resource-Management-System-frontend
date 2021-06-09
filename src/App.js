import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from 'semantic-ui-react'

import Navi from "./layouts/Navi";
import Dashboard from "./layouts/Dashboard";
import JobSeekerList from "./pages/JobSeekerList";
import EmployerList from "./pages/EmployerList";
import CvLayout from "./layouts/CvLayout";
import AblilityList from "./pages/AblilityList";
import LanguageList from "./pages/LanguageList";
import SchoolList from "./pages/SchoolList";
import SocialMediaList from "./pages/SocialMediaList";
import WorkPlaceList from "./pages/WorkPlaceList";
import { Button, Container, Row, Col } from "reactstrap";
import MainPage from "./pages/MainPage";
import Footer from "./layouts/Footer";
import { Menu } from 'semantic-ui-react'
import JobAdvertisementFavList from "./pages/JobAdvertisementFavList";
function App() {
  return (
    <div className="App">
        <Navi />
        <MainPage/>
        <JobAdvertisementFavList/>
        <Footer/>
        <Dashboard/>

    </div>
  );
}

export default App;
