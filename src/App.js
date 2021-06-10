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
import AdvertDetail from "./pages/AdvertDetail";
import SchoolList from "./pages/SchoolList";
import SocialMediaList from "./pages/SocialMediaList";
import WorkPlaceList from "./pages/WorkPlaceList";
import { Button, Container, Row, Col } from "reactstrap";
import MainPage from "./pages/MainPage";
import Footer from "./layouts/Footer";
import { Menu } from 'semantic-ui-react'
import JobAdvertisementFavList from "./pages/JobAdvertisementFavList";
import CvDashboard from "./layouts/CvDashboard";
function App() {
  return (
    <div className="App">
        <Navi />
        <MainPage/>
        <Route exact path="/" component={JobAdvertisementFavList}/>
        <Route exact path="/" component={Footer}/>
        <Route path="/employers" component={EmployerList}/>
        <Route path="/jobseekers" component={JobSeekerList}/>
        <Route exact path="/adverts" component={Dashboard}/>
        <Route  path="/adverts/:id" component={AdvertDetail}/>
        <Route path="/cvdetail" component={CvDashboard}/>
    </div>
  );
}

export default App;
