import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Route } from "react-router-dom";
import Navi from "./layouts/Navi";
import DashboardForFilter from "./layouts/adverts/DashboardForAdverts";
import JobSeekerList from "./pages/users/JobSeekerList";
import EmployerList from "./pages/users/EmployerList";
import AdvertDetail from "./pages/adverts/AdvertDetail";
import MainPage from "./pages/MainPage";
import NewAdvert from "./pages/adverts/NewAdvert";
import Footer from "./layouts/Footer";
import JobAdvertisementFavList from "./pages/adverts/JobAdvertisementFavList";
import CvDashboard from "./layouts/cv/CvDashboard";
import ConfirmAdvert from "./pages/adverts/ConfirmAdvert";
import ConfirmAdvertDetail from "./pages/adverts/ConfirmAdvertDetail";
import { ToastContainer } from 'react-toastify'
import EmployeeDetail from "./pages/users/EmployeeDetail";
import EmployerDetail from "./pages/users/EmployerDetail";

import AdvertsByFilter from "./pages/adverts/AdvertsByFilter";
import EmployerDetailForAdmin from "./pages/users/EmployerDetailForAdmin";

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
        <Route exact path="/adverts" component={DashboardForFilter}/>
        <Route  exact path="/adverts/:id" component={AdvertDetail}/>
        <Route path="/cvdetail" component={CvDashboard}/>
        <Route exact path="/newadvert" component={NewAdvert}/>
        <Route exact path="/confirmAdvert" component={ConfirmAdvert}/>
        <Route exact path="/confirmAdvertDetail/:id" component={ConfirmAdvertDetail}/>
        <Route exact path="/employeeDetail" component={EmployeeDetail}/>

        <Route  path='/adverts/filter/:jobPositionId/:companySectorId/:wayOfWorkingId/:positionLevelId/:educationLevelId/:cityId' component={AdvertsByFilter}/>
        <Route exact path="/employerdetail/:id" component={EmployerDetail}/>
        <Route exact path="/employerdetailforadmin/:id" component={EmployerDetailForAdmin}/>
        
        
    </div>
  );
}

export default App;
