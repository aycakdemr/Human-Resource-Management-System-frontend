import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Grid,
  Table,
  Header,
  Card,
  Button,
  Container,
  Message,
} from "semantic-ui-react";
import EmployerService from "../../services/employerService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import { useFormik } from "formik";
import EmployerConfirm from "./EmployerConfirm";

export default function EmployerDetailForAdmin() {
    let { id } = useParams();
    let employersService = new EmployerService()
  const [jobadvertisements, setJobAdvertisements] = useState([]);
  const [employer, setEmployer] = useState({});
  console.log(employer);
  useEffect(() => {
    let employersService = new EmployerService();
    let advertService = new JobAdvertisementService();
    employersService
      .getByIdForAdmins(id)
      .then((result) => setEmployer(result.data.data));
    
    advertService
      .getByEmployerId(id)
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  
    return (
        <div>
                  <Container>
        <Header>
          <Card fluid>
            <Card.Content>
              <Card.Header>{employer?.companyName}</Card.Header>
              <Card.Meta>{employer?.website}</Card.Meta>
              <Card.Meta textAlign="right">
                <Button as={Link} to={"/companies"} secondary>
                  Tüm Şirketler
                </Button>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Header>
        <Grid columns="two" divided>
          <Grid.Row>
            <Grid.Column width={6}>
            {String(employer?.employerCase?.caseName) === "Reddedildi" ||
              String(employer?.employerCase?.caseName) === "Onay bekliyor" ? (
                <Message negative>
                  <Message.Header>
                    {employer?.employerCase?.caseName}
                  </Message.Header>
                </Message>
              ) : (
                <Message positive>
                  <Message.Header>
                    {employer?.employerCase?.caseName}
                  </Message.Header>
                </Message>
              )}

              <Table celled color="black">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>İşveren</Table.HeaderCell>
                    <Table.HeaderCell>Detaylar</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <strong>Email</strong>
                    </Table.Cell>
                    <Table.Cell>{employer?.email}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <strong>Telefon</strong>
                    </Table.Cell>
                    <Table.Cell>+90{employer?.phoneNumber}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <strong>İlan Sayısı</strong>
                    </Table.Cell>
                    <Table.Cell>
                      {jobadvertisements?.length > 0
                        ? jobadvertisements.length
                        : 0}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <EmployerConfirm id={id}/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Table celled color="black">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                    <Table.HeaderCell>Lokasyon</Table.HeaderCell>
                    <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
                    <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                    <Table.HeaderCell>İlan Detayı</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                {jobadvertisements.length > 0 ? (
                  jobadvertisements.map((advert) => (
                    <Table.Body key={advert.id}>
                      <Table.Row>
                        <Table.Cell>{advert.jobPosition?.name}</Table.Cell>
                        <Table.Cell>{advert.city?.cityName}</Table.Cell>
                        <Table.Cell>{advert.quota}</Table.Cell>
                        <Table.Cell>{advert.applicationDeadline}</Table.Cell>
                        <Table.Cell>
                          <Button
                            as={Link}
                            to={`/adverts/${advert?.id}`}
                            secondary
                          >
                            Git
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))
                ) : (
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>İlan Bulunamadı</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                )}
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
        </div>
    )
}
