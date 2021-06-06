import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService"
export default function JobAdvertisementList() {
  const [jobadvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data))
      
  },[]);
  return (
    <div>
        
      <Card.Group>
      {jobadvertisements.map((jobadvertisement) => (
          <Card>
            <Card.Content>
             
              <Card.Header><mark>{jobadvertisement.employer.companyName}</mark></Card.Header>
              <Card.Meta key={jobadvertisement.id}></Card.Meta>
              <Card.Description>
              
              <label>İş Tanımı : </label>
                <strong>{jobadvertisement.description}{" "}</strong>
                <br></br><br></br>
                <label>Pozisyon Adı : </label>
                <strong>{jobadvertisement.jobPosition.name}{" "}</strong><br></br>

                <label>Çalışma Şekli : </label>
               <strong>{jobadvertisement.wayofworking.name}{" "}</strong><br></br>
               <label>Pozisyon Seviyesi : </label>
              <strong>{jobadvertisement.positionLevel.name}{" "}</strong><br></br>
              <label>Konum : </label>
                <strong>{jobadvertisement.city.cityName}{" "}</strong><br></br>
                <label>Maaş Aralığı : </label>
                <strong>{jobadvertisement.minSalary}{" "}</strong>
                <strong>{jobadvertisement.maxSalary}{" "}</strong><br></br>
                
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  İncele
                </Button>
                <Button basic color="red">
                  Kaydet
                </Button>
              </div>
            </Card.Content>
          </Card>
      ))}
      </Card.Group>
      
    </div>
  );
}
