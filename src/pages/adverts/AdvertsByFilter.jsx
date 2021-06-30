import React, { useEffect, useState } from "react";
import { NavbarBrand, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Button,Pagination} from "semantic-ui-react";
import {addToList} from "../../store/actions/favAdvertActions"
import {toast} from "react-toastify"
import { useParams } from 'react-router';
import LayoutForFilter from "../../layouts/adverts/LayoutForFilter";
import { Grid,  Container } from "semantic-ui-react";

import {
    Badge,
    Card,
    CardBody,
    Row
  } from "reactstrap";
import { useDispatch } from "react-redux";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function AdvertsByFilter() {
const [activePage, setActivePage] = useState(1);
let jobAdvertisementService = new JobAdvertisementService();
    let { jobPositionId } = useParams();
    let { companySectorId } = useParams();
    let { wayOfWorkingId } = useParams();
    let { positionLevelId } = useParams();
    let { educationLevelId } = useParams();
    let { cityId } = useParams();
    let filter :{
      cityId : cityId,
      companySectorId: companySectorId,
      educationLevelId :educationLevelId,
      jobPositionId : jobPositionId,
      positionLevelId :positionLevelId,
      wayOfWorkingId:wayOfWorkingId
    }
    const dispatch = useDispatch()
    const [jobadvertisements, setJobAdvertisements] = useState([]);

    const handleAddToList=(advert)=>{
      dispatch(addToList(advert))
      toast.warning(`İLAN EKLENDİ`)
      
    }
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService
          .getByFilter(activePage,5,filter)
          .then((result) => setJobAdvertisements(result.data.data))
          
      },[]);
      console.log(jobadvertisements)
      const handlePaginationChanging = (e, { activePage }) => {
        setActivePage(activePage);
        jobAdvertisementService
          .getByFilter(activePage,5,filter)
          .then((result) => setJobAdvertisements(result.data.data));
      };
    return (
        <div>
            <Container>
            <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <br></br>
            <LayoutForFilter />
          </Grid.Column>

          <Grid.Column width={13}>
            <br></br>
            <br></br>
            <Navbar className="navbar-dark bg-danger rounded" expand="lg" style={{ marginLeft: "1.5rem" }}>
          <Container >
            <NavbarBrand >Tüm İlanlar</NavbarBrand>
          </Container>
          <br></br>
          <br></br>
        </Navbar>
        <br></br>
              <Row className="justify-content-center">
              {jobadvertisements.map((jobAdvertisement) => (
                
                  <Row className="row-grid">
                    
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h4 className="text-primary text-uppercase">
                          {jobAdvertisement?.employer?.companyName}
                          </h4>
                          <h6 className="text-danger text-uppercase">
                          {jobAdvertisement?.advertTitle}
                          </h6>
                          <p >
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                            {jobAdvertisement?.wayofworking?.name}
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            {jobAdvertisement?.positionLevel?.name}
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            {jobAdvertisement?.city?.cityName}
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            as={NavLink}
                            to={`/adverts/${jobAdvertisement?.id}`}
                          >
                            
                            İncele
                          </Button>
                          <Button
                            className="mt-4"
                            color="danger"
                            onClick={() =>handleAddToList(jobAdvertisement)}
                          >
                            Yıldızla
                          </Button>
                        </CardBody>
                      </Card>
                   
                    
                    
              
                  <br></br>
                </Row>
                 ))}
              </Row>
              <Pagination
        defaultActivePage={1}
        totalPages={4}
        onPageChange={handlePaginationChanging}
      />
          </Grid.Column>
        </Grid.Row>
      </Grid>
                
          
             
            </Container>
           
        </div>
    )
}
