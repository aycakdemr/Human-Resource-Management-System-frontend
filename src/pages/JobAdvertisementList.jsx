import React, { useEffect, useState } from "react";
import { NavbarBrand, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Button} from "semantic-ui-react";
import JobAdvertisementService from '../services/jobAdvertisementService';
import {addToList} from "../store/actions/favAdvertActions"
import {toast} from "react-toastify"

import {
    Badge,
    Card,
    CardBody,
    Container,
    Row
  } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function JobAdvertisementList() {
  const dispatch = useDispatch()
    const [jobadvertisements, setJobAdvertisements] = useState([]);

    const handleAddToList=(advert)=>{
      dispatch(addToList(advert))
      toast.warning(`İLAN EKLENDİ`)
      
    }
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService
          .getAll()
          .then((result) => setJobAdvertisements(result.data.data))
          
      },[]);
    return (
        <div>
          <Container>
          <Navbar className="navbar-dark bg-danger rounded" expand="lg">
          <Container>
            <NavbarBrand>Tüm İlanlar</NavbarBrand>
          </Container>
          <br></br>
          <br></br>
        </Navbar>
        <br></br>
              <Row className="justify-content-center">
              {jobadvertisements.map((jobadvertisement) => (
                
                  <Row className="row-grid">
                    
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h4 className="text-primary text-uppercase">
                          {jobadvertisement.employer.companyName}
                          </h4>
                          <h6 className="text-danger text-uppercase">
                          {jobadvertisement.advertTitle}
                          </h6>
                          <p >
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                            {jobadvertisement.wayofworking.name}
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            {jobadvertisement.positionLevel.name}
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            {jobadvertisement.city.cityName}
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            as={NavLink}
                            to={`/adverts/${jobadvertisement.id}`}
                          >
                            
                            İncele
                          </Button>
                          <Button
                            className="mt-4"
                            color="danger"
                            onClick={() =>handleAddToList(jobadvertisement)}
                          >
                            Yıldızla
                          </Button>
                        </CardBody>
                      </Card>
                   
                    
                    
              
                  <br></br>
                </Row>
                 ))}
              </Row>
             
            </Container>
           
        </div>
    )
}
