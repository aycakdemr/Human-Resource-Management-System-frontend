import React, { useEffect, useState } from "react";
import {
  Image,
  Container,
  Table,
  Grid,
  Divider,
  Header,
  Progress,
  Menu,
  Label,
  Button,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import JobSeekerService from "../../services/jobSeekerService";
import AbilityService from "../../services/abilityService";
import LanguageService from "../../services/languageService";
import SocialMediaService from "../../services/socialMediaService";
import SchoolService from "../../services/schoolService";
import WorkPlaceService from "../../services/workPlaceService";

export default function Resume() {
  const [jobSeeeker, setJobSeeker] = useState({});
  const [jobSeeekerAbilities, setJobSeekerAbilities] = useState([]);
  const [jobSeeekerLanguages, setJobSeekerLanguages] = useState([]);
  const [jobSeeekerSocialMedia, setJobSeekerSocialMedia] = useState([]);
  const [jobSeeekerSchools, setJobSeekerSchools] = useState([]);
  const [jobSeeekerWorkplace, setJobSeekerWorkplace] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    let abilityService = new AbilityService();
    let languageService = new LanguageService();
    let socialMediaService = new SocialMediaService();
    let schoolService = new SchoolService();
    let workplaceService = new WorkPlaceService();
    jobSeekerService
      .getById(7)
      .then((result) => setJobSeeker(result.data.data));
    abilityService
      .getAbilitiesByJobSeekerId(7)
      .then((result) => setJobSeekerAbilities(result.data.data));
    languageService
      .getLanguagesByJobSeekerId(7)
      .then((result) => setJobSeekerLanguages(result.data.data));
    socialMediaService
      .getSocialMediaByJobSeekerId(7)
      .then((result) => setJobSeekerSocialMedia(result.data.data));
    schoolService
      .getSchoolsByJobSeekerId(7)
      .then((result) => setJobSeekerSchools(result.data.data));
    workplaceService
      .getWorkPlaceByJobSeekerId(7)
      .then((result) => setJobSeekerWorkplace(result.data.data));
  }, []);

  return (
    <div>
      <Container>
        <Grid columns="two" divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image
                src="https://pics.freeicons.io/uploads/icons/png/6620618271548234969-512.png"
                size="medium"
                circular
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <br></br>
              <Table celled color="black">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>İş Arayan</Table.HeaderCell>
                    <Table.HeaderCell>Detaylar</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <strong>İsim</strong>
                    </Table.Cell>
                    <Table.Cell>{jobSeeeker?.firstName}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <strong>Soyisim</strong>
                    </Table.Cell>
                    <Table.Cell>{jobSeeeker?.lastName}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <strong>Email</strong>
                    </Table.Cell>
                    <Table.Cell>{jobSeeeker?.email}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <strong>Kimlik No</strong>
                    </Table.Cell>
                    <Table.Cell>{jobSeeeker?.identityNumber}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />

        <Grid columns="two" divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header as="h3" block>
                Yetenekler
              </Header>
              <Menu vertical color="black" style={{ width: "18rem" }}>
                {jobSeeekerAbilities.map((abilities) => (
                  <Menu.Item name="promotions">
                    <Header as="h4">{abilities?.ability?.abilityName}</Header>
                    <Progress percent={abilities?.degree} color="orange" />
                  </Menu.Item>
                ))}
              </Menu>
            </Grid.Column>
            <Grid.Column width={12}>
              <Grid columns="two" divided>
                <Grid.Row>
                  <Grid.Column width={8} style={{ marginLeft: "1rem" }}>
                    <Header as="h3" block>
                      Diller
                    </Header>

                    <Menu vertical color="black" style={{ width: "28rem" }}>
                      {jobSeeekerLanguages.map((languages) => (
                        <Menu.Item name="promotions">
                          <Header as="h4">
                            {languages?.language?.languageName}
                          </Header>
                          <Label as="a" floating color="orange">
                            {languages?.languageLevel?.levelName}
                          </Label>
                        </Menu.Item>
                      ))}
                    </Menu>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as="h3" block style={{ width: "28rem" }}>
                      Sosyal Medya
                    </Header>
                    <Table celled color="black" style={{ width: "28rem" }}>
                      <Table.Body>
                        {jobSeeekerSocialMedia.map((socialMedia) => (
                          <Table.Row>
                            <Table.Cell>
                              <strong>
                                {socialMedia?.linkType?.linkTypeName}
                              </strong>
                            </Table.Cell>
                            <Table.Cell>{socialMedia?.link}</Table.Cell>
                            <Table.Cell>
                              <a
                                type="button"
                                href={socialMedia?.link}
                                color="orange"
                              >
                                Git
                              </a>{" "}
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Divider />
              <Header as="h3" block>
                Okullar
              </Header>
              <Table striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
                    <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                    <Table.HeaderCell>Başlama Tarihi</Table.HeaderCell>
                    <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {jobSeeekerSchools.map((schools) => (
                    <Table.Row key={schools.id}>
                      <Table.Cell>
                        {schools?.department?.departmentName}
                      </Table.Cell>
                      <Table.Cell>{schools?.school?.schoolName}</Table.Cell>
                      <Table.Cell>{schools?.dateOfEntry}</Table.Cell>
                      <Table.Cell>{schools?.dateOfGraduation}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <Divider />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header as="h3" block>
          Deneyimler
        </Header>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>İş Yeri Adı</Table.HeaderCell>
              <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Ayrılma Tarihi</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobSeeekerWorkplace.map((workplace) => (
              <Table.Row key={workplace.id}>
                <Table.Cell>{workplace.workplaceName}</Table.Cell>
                <Table.Cell>{workplace.dateOfEntry}</Table.Cell>
                <Table.Cell>{workplace.dateOfLeaving}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <Button
          as={NavLink}
          to="/cvdetail"
          style={{
            marginBottom: "10rem",
            marginLeft: "70rem",
            marginTop: "3rem",
          }}
          size="big"
          color="orange"
          type="submit"
          name="id"
        >
          Cv Düzenle
        </Button>
      </Container>
    </div>
  );
}
