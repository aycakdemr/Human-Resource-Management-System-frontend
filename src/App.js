import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Route } from "react-router-dom";
import Navi from "./layouts/Navi";
import Dashboard from "./layouts/Dashboard";
import JobSeekerList from "./pages/JobSeekerList";
import EmployerList from "./pages/EmployerList";
import AdvertDetail from "./pages/AdvertDetail";
import MainPage from "./pages/MainPage";
import NewAdvert from "./pages/NewAdvert";
import Footer from "./layouts/Footer";
import JobAdvertisementFavList from "./pages/JobAdvertisementFavList";
import CvDashboard from "./layouts/CvDashboard";
import ConfirmAdvert from "./pages/ConfirmAdvert";
import ConfirmAdvertDetail from "./pages/ConfirmAdvertDetail";
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
       <ToastContainer position="bottom-right"/>
        <Navi />
        <MainPage/>
        <Route exact path="/" component={JobAdvertisementFavList}/>
        <Route exact path="/" component={Footer}/>
        <Route path="/employers" component={EmployerList}/>
        <Route path="/jobseekers" component={JobSeekerList}/>
        <Route exact path="/adverts" component={Dashboard}/>
        <Route  path="/adverts/:id" component={AdvertDetail}/>
        <Route path="/cvdetail" component={CvDashboard}/>
        <Route exact path="/newadvert" component={NewAdvert}/>
        <Route exact path="/confirmAdvert" component={ConfirmAdvert}/>
        <Route exact path="/confirmAdvertDetail/:id" component={ConfirmAdvertDetail}/>
        
    </div>
  );
}

export default App;
