import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Grid ,Button} from 'semantic-ui-react'

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

function App() {
  return (
    <div className="App">
      <Container className="main">
        <Navi />
        <Router>
          <Switch>
            <Route path="/main" exact>
              <Dashboard />
            </Route>
            <Route path="/JobSeekerList/getAll" exact>
              <br></br>
              <JobSeekerList />
            </Route>
            <Route path="/EmployerList/getAll" exact>
              <br></br>
              <EmployerList />
            </Route>
            <Route path="/CvLayout" exact>
              <br></br>
              <CvLayout />
            </Route>
            <Route path="/AbilityList/getAll" exact>
              <br></br>
              <Grid >
                <Grid.Row >
                    <Grid.Column width={3}>
              <CvLayout/>

                    </Grid.Column>
                   
                    <Grid.Column width={13}>
                    <AblilityList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
             
            </Route>
            <Route path="/LanguageList/getAll" exact>
              <br></br>
              <Grid >
                <Grid.Row >
                    <Grid.Column width={3}>
              <CvLayout/>

                    </Grid.Column>
                   
                    <Grid.Column width={13}>
                    <LanguageList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
             
            </Route>
            <Route path="/SchoolList/getAll" exact>
              <br></br>
              <Grid >
                <Grid.Row >
                    <Grid.Column width={3}>
              <CvLayout/>

                    </Grid.Column>
                   
                    <Grid.Column width={13}>
                    <SchoolList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
             
            </Route>
            <Route path="/SocialMedia/getAll" exact>
              <br></br>
              <Grid >
                <Grid.Row >
                    <Grid.Column width={3}>
              <CvLayout/>

                    </Grid.Column>
                   
                    <Grid.Column width={13}>
                    <SocialMediaList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
             
            </Route>
            <Route path="/WorkPlace/getAll" exact>
              <br></br>
              <Grid >
                <Grid.Row >
                    <Grid.Column width={3}>
              <CvLayout/>

                    </Grid.Column>
                   
                    <Grid.Column width={13}>
                    <WorkPlaceList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
             
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
