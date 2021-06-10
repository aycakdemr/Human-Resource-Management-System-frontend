import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { Button, Card, Container, Row, Col } from "reactstrap";
import JobAdvertisementService from '../services/jobAdvertisementService';
export default function AdvertDetail() {
    let { id } = useParams();
    const [advert, setAdvert] = useState({});

    useEffect(()=>{
        let advertService = new JobAdvertisementService()
        advertService.getById(id).then(result => setAdvert(result.data.data))
    },[])
    
    return (
        <div>
            <main className="profile-page">
          <section className="section-profile-cover ">
            
            
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          size="sm"
                        >
                          İletişim
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          size="sm"
                        >
                          Mesaj
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h1>
                      {advert.employer.companyName}{" "}
                    </h1>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      {advert.city.cityName}
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      {advert.positionLevel.name}
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      {advert.wayofworking.name}
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      {advert.employer.companysector.name}
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        
                        {advert.description}
                        
                        <label></label>
                        <h4>Maaş Aralığı: {advert.minSalary} - {advert.maxSalary} </h4>
                        <h4>Alınacak Kişi Sayısı: {advert.quota}  </h4>
                        <h4>Web Sitesi: {advert.employer.webAddress}  </h4>
                        <h4>Telefon Numarası: {advert.employer.phoneNumber} </h4>
                        
                        <Button
                    color="danger"
                    size="lg"
                    type="button"
                    className="ml-1"
                  >
                    Başvur
                  </Button>
                          
                      </Col>
                      
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        </div>
    )
}
