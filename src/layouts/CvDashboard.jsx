import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import SchoolList from '../pages/SchoolList'
import SocialMediaList from '../pages/SocialMediaList'
import WorkPlaceList from '../pages/WorkPlaceList'
import LanguageList from '../pages/LanguageList'
import CvLayout from './CvLayout'
import { Grid } from 'semantic-ui-react'
import AblilityList from '../pages/AblilityList'

export default function CvDashboard() {
    return (
        <div>
            <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                          <CvLayout/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        
                        <Route exact path="/cvdetail/abilitylist" component={AblilityList}/>
                        <Route exact path="/cvdetail/school" component={SchoolList}/>
                        <Route exact path="/cvdetail/socialmedia" component={SocialMediaList}/>
                        <Route exact path="/cvdetail/workplace" component={WorkPlaceList}/>
                        <Route exact path="/cvdetail/language" component={LanguageList}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        </div>
    )
}
