import React, { useEffect, useState } from "react";
import { Grid, Button, Menu,Form ,Dropdown,Label,Container} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import JobPositionService from "../../services/jobPositionService";
import CompanySectorService from "../../services/companySectorService";
import WayOfWorkingService from "../../services/wayOfWorkingService";
import PositionLevelService from "../../services/positionLevelService";
import EducationLevelService from "../../services/educationLevelService";
import { useFormik } from "formik";
import CityService from "../../services/cityService";

export default function LayoutForFilter() {
    const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const [companysectors, setCompanySectors] = useState([]);

  useEffect(() => {
    let companySectorService = new CompanySectorService();
    companySectorService
      .getAll()
      .then((result) => setCompanySectors(result.data.data));
  }, []);

  const [wayofworkings, setWayOfWorking] = useState([]);

  useEffect(() => {
    let wayOfWorkingService = new WayOfWorkingService();
    wayOfWorkingService
      .getAll()
      .then((result) => setWayOfWorking(result.data.data));
  }, []);

  const [positionLevels, setPositionLevels] = useState([]);

  useEffect(() => {
    let positionLevelService = new PositionLevelService();
    positionLevelService
      .getAll()
      .then((result) => setPositionLevels(result.data.data));
  }, []);

  const [educationLevels, setEducationLevels] = useState([]);

  useEffect(() => {
    let educationLevelService = new EducationLevelService();
    educationLevelService
      .getAll()
      .then((result) => setEducationLevels(result.data.data));
  }, []);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService
      .getAll()
      .then((result) => setCities(result.data.data));
  }, []);
  const formik = useFormik({
    initialValues: {
      jobPositionId: "",
      companySectorId: "",
      wayOfWorkingId: "",
      positionLevelId: "",
      educationLevelId:"",
      cityId:""
    },
    onSubmit: (values) => {
      console.log(values)
      window.location.href = `/adverts/filter/${values.jobPositionId}/${values.companySectorId}/${values.wayOfWorkingId}/${values.positionLevelId}/${values.educationLevelId}/${values.cityId}`;
    },
  });
  const jobPositionOption = jobPositions.map((jobPositions, index) => ({
    key: index,
    text: jobPositions.name,
    value: jobPositions.id,
  }));

  const companysectorOption = companysectors.map((companysectors, index) => ({
    key: index,
    text: companysectors.name,
    value: companysectors.id,
  }));

  const wayofworkingsOption = wayofworkings.map((wayofworkings, index) => ({
    key: index,
    text: wayofworkings.name,
    value: wayofworkings.id,
  }));
  const educationLevelsOption = educationLevels.map((educationLevels, index) => ({
    key: index,
    text: educationLevels.name,
    value: educationLevels.id,
  }));

  const positionLevelsOption = positionLevels.map((positionLevels, index) => ({
    key: index,
    text: positionLevels.name,
    value: positionLevels.id,
  }));

  const citiesOption = cities.map((cities, index) => ({
    key: index,
    text: cities.cityName,
    value: cities.id,
  }));
  const handleChangeValues = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
            <Menu vertical>
              <Menu.Item>
                <Menu.Header>İş Pozisyonları</Menu.Header>

                <Menu.Menu>
                <Menu.Item active >
                <Dropdown
                  clearable
                  placeholder="İş Pozisyonları"
                  selection
                  id="jobPositionId"
                  onChange={(event, data) =>
                    handleChangeValues(data.value, "jobPositionId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.jobPositionId}
                  options={jobPositionOption}
                />
                {formik.touched.cityId && formik.errors.jobPositionId && (
                  <Label attached="bottom left"
                    pointing
                    basic
                    color="red"
                    content={formik.errors.jobPositionId}
                  ></Label>
                )}
              </Menu.Item>
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Şirket Sektörü</Menu.Header>

                <Menu.Menu>
                <Menu.Item active >
                <Dropdown
                  clearable
                  placeholder="Şirket Sektörü"
                  selection
                  id="companySectorId"
                  onChange={(event, data) =>
                    handleChangeValues(data.value, "companySectorId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.companySectorId}
                  options={companysectorOption}
                />
                {formik.touched.cityId && formik.errors.companySectorId && (
                  <Label attached="bottom left"
                    pointing
                    basic
                    color="red"
                    content={formik.errors.companySectorId}
                  ></Label>
                )}
              </Menu.Item>
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Çalışma Şekli</Menu.Header>

                <Menu.Menu>
                <Menu.Item>
                <Dropdown
                  clearable
                  placeholder="Çalışma Şekli"
                  selection
                  id="wayOfWorkingId"
                  onChange={(event, data) =>
                    handleChangeValues(data.value, "wayOfWorkingId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.wayOfWorkingId}
                  options={wayofworkingsOption}
                />
                {formik.touched.cityId && formik.errors.wayOfWorkingId && (
                  <Label attached="bottom left"
                    pointing
                    basic
                    color="red"
                    content={formik.errors.wayOfWorkingId}
                  ></Label>
                )}
                </Menu.Item>
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Pozisyon Seviyesi</Menu.Header>

                <Menu.Menu>
                <Menu.Item>
                <Dropdown
                  clearable
                  placeholder="Pozisyon Seviyesi"
                  selection
                  id="positionLevelId"
                  onChange={(event, data) =>
                    handleChangeValues(data.value, "positionLevelId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.positionLevelId}
                  options={positionLevelsOption}
                />
                {formik.touched.cityId && formik.errors.positionLevelId && (
                  <Label attached="bottom left"
                    pointing
                    basic
                    color="red"
                    content={formik.errors.positionLevelId}
                  ></Label>
                )}
                </Menu.Item>
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Eğitim Seviyesi</Menu.Header>

                <Menu.Menu>
                <Menu.Item>
                <Dropdown
                  clearable
                  placeholder="Eğitim Seviyesi"
                  selection
                  id="educationLevelId"
                  onChange={(event, data) =>
                    handleChangeValues(data.value, "educationLevelId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.educationLevelId}
                  options={educationLevelsOption}
                />
                {formik.touched.cityId && formik.errors.educationLevelId && (
                  <Label attached="bottom left"
                    pointing
                    basic
                    color="red"
                    content={formik.errors.educationLevelId}
                  ></Label>
                )}
                </Menu.Item>
                </Menu.Menu>
              </Menu.Item>
              <Menu.Item>
                <Menu.Header>Şehirler</Menu.Header>

                <Menu.Menu>
                <Menu.Item>
                <Dropdown
                  clearable
                  placeholder="Şehir"
                  selection
                  id="cityId"
                  onChange={(event, data) =>
                    handleChangeValues(data.value, "cityId")
                  }
                  onBlur={formik.onBlur}
                  value={formik.values.cityId}
                  options={citiesOption}
                />
                {formik.touched.cityId && formik.errors.cityId && (
                  <Label attached="bottom left"
                    pointing
                    basic
                    color="red"
                    content={formik.errors.cityId}
                  ></Label>
                )}
              </Menu.Item>
                </Menu.Menu>
              </Menu.Item>
              <br></br>
              <Container>
              <Button primary>Filtrele</Button>
              <Button color="red" as={NavLink}
              to="/adverts">Temizle</Button>
              </Container>
            </Menu>
            <Button
              className="mt-4"
              color="orange"
              as={NavLink}
              to="/newadvert"
            >
              Yeni İlan Ekle
            </Button>
            <Button
              className="mt-4"
              color="purple"
              as={NavLink}
              to="/confirmAdvert"
            >
              İlan Onayla
            </Button>
            </Form>
        </div>
    )
}
