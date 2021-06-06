import React from 'react'
import { Grid ,Button} from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import Cities from './Cities'
import EducationLevel from './EducationLevel'
import Employers from './Employers'
import JobPositions from './JobPositions'
import PositionLevels from './PositionLevels'
import WayOfWorkings from './WayOfWorkings'

export default function Dashboard() {
    return (
        
            <Grid >
                <Grid.Row >
                    <Grid.Column width={3}>
                    <br></br>
                        <JobPositions/>
                        <br></br>
                        <Employers/>
                        <br></br>
                        <Cities/>
                        <br></br>
                        <WayOfWorkings/>
                        <br></br>
                        <PositionLevels/>
                        <br></br>
                        <EducationLevel/>
                        <br></br>
                        <Button primary>Filtrele</Button>
                    </Grid.Column>
                   
                    <Grid.Column width={13}>
                       <br></br>
                       <br></br>
                        <JobAdvertisementList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
       
    )
}
