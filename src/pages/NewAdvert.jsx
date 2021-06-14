import ReactDOM from "react-dom";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Container, Button } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";
import HowToWorkService from "../services/howToWorkService";
import CityService from "../services/cityService";
import WayOfWorkingService from "../services/wayOfWorkingService";
import PositionLevelService from "../services/positionLevelService";
import EducationLevelService from "../services/educationLevelService";
import JobAdvertisementService from "../services/jobAdvertisementService";
export default function NewAdvert() {
  let JobAdvertService = new JobAdvertisementService();
  const [howtoworks, setHowToWorks] = useState([]);
  const [jobPositions, setJobPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [wayOfWorkings, setWayOfWorkings] = useState([]);
  const [positionLevels, setPositionLevels] = useState([]);
  const [educationLevels, setEducationLevels] = useState([]);

  useEffect(() => {
    let howToWorkService = new HowToWorkService();
    let jobPositionService = new JobPositionService();
    let cityService = new CityService();
    let wayOfWorkingService = new WayOfWorkingService();
    let positionLevelService = new PositionLevelService();
    let educationLevelService = new EducationLevelService();
    howToWorkService.getAll().then((result) => setHowToWorks(result.data.data));
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));
    cityService.getAll().then((result) => setCities(result.data.data));
    wayOfWorkingService
      .getAll()
      .then((result) => setWayOfWorkings(result.data.data));
    positionLevelService
      .getAll()
      .then((result) => setPositionLevels(result.data.data));
    educationLevelService
      .getAll()
      .then((result) => setEducationLevels(result.data.data));
  }, []);
  const NewAdvertSchema = Yup.object().shape({
    employerId: Yup.string()
      .min(2, "Minimum iki karakter olmalıdır")
      .required("Bu alanın doldurulması zorunludur"),
    jobTitleId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    quota: Yup.string().required("Bu alanın doldurulması zorunludur"),
    applicationDeadline: Yup.string().required(
      "Bu alanın doldurulması zorunludur"
    ),
    minSalary: Yup.string().required("Bu alanın doldurulması zorunludur"),
    maxSalary: Yup.string().required("Bu alanın doldurulması zorunludur"),
    wayOfWorkinId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    positionLevelId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    educationLevelId: Yup.string().required(
      "Bu alanın doldurulması zorunludur"
    ),
    howToWorkId: Yup.string().required("Bu alanın doldurulması zorunludur"),
  });
  const formik = useFormik({
    initialValues: {
      jobTitleId: "",
      description: "",
      cityId: "",
      quota: "",
      applicationDeadline: "",
      minSalary: "",
      maxSalary: "",
      wayOfWorkinId: "",
      positionLevelId: "",
      educationLevelId: "",
      howToWorkId: "",
    },
    validationSchema: NewAdvertSchema,
    onSubmit: (value) => {
      value.employerId = 2;
      value.isActive = true;
      value.createdDate = "12/10/2020";
      value.quota = 2;
      JobAdvertService.add(value).then((result) =>
        console.log(result.data.data)
      );
    },
  });
  const wayOfWorkingOption = wayOfWorkings.map((wayofWorking, index) => ({
    key: index,
    text: wayofWorking.name,
    value: wayofWorking.id,
  }));
  const positionLevelOption = positionLevels.map((positionlevel, index) => ({
    key: index,
    text: positionlevel.name,
    value: positionlevel.id,
  }));
  const educationLevelOption = educationLevels.map((educationlevel, index) => ({
    key: index,
    text: educationlevel.name,
    value: educationlevel.id,
  }));
  const jobPositionOption = jobPositions.map((jobposition, index) => ({
    key: index,
    text: jobposition.name,
    value: jobposition.id,
  }));
  const howToWorkOption = howtoworks.map((howToWork, index) => ({
    key: index,
    text: howToWork.workTypeName,
    value: howToWork.id,
  }));
  const cityOption = cities.map((cities, index) => ({
    key: index,
    text: cities.cityName,
    value: cities.id,
  }));
  const handleChangeValues = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };
  return (
    <div>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group widths="equal">
            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Input
                label="Son Başvuru Tarihi"
                placeholder="Son Başvuru Tarihi"
                id="applicationDeadline"
                name="applicationDeadline"
                value={formik.values.applicationDeadline}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.applicationDeadline &&
                  Boolean(formik.errors.applicationDeadline)
                }
              />
              {formik.touched.applicationDeadline &&
                formik.errors.applicationDeadline}
            </div>

            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Select
                fluid
                id="jobTitleId"
                name="jobTitleId"
                label="İş Başlığı"
                onChange={(event, data) =>
                  handleChangeValues(data.value, "jobTitleId")
                }
                onBlur={formik.onBlur}
                value={formik.values.jobTitleId}
                options={jobPositionOption}
                placeholder="İş Başlığı"
              />
            </div>
            <div style={{ width: "50rem" }}>
              <Form.Select
                fluid
                id="howToWorkId"
                name="howToWorkId"
                label="Çalışma Şekli"
                onChange={(event, data) =>
                  handleChangeValues(data.value, "howToWorkId")
                }
                onBlur={formik.onBlur}
                value={formik.values.howToWorkId}
                options={howToWorkOption}
                placeholder="Çalışma Şekli"
              />
            </div>
          </Form.Group>

          <Form.Group widths="equal">
            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Select
                fluid
                id="cityId"
                name="cityId"
                label="Şehir Adı"
                onChange={(event, data) =>
                  handleChangeValues(data.value, "cityId")
                }
                onBlur={formik.onBlur}
                value={formik.values.cityId}
                options={cityOption}
                placeholder="Şehir Adı"
              />
            </div>

            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Select
                fluid
                id="educationLevelId"
                name="educationLevelId"
                label="Eğitim Seviyesi"
                onChange={(event, data) =>
                  handleChangeValues(data.value, "educationLevelId")
                }
                onBlur={formik.onBlur}
                value={formik.values.educationLevelId}
                options={educationLevelOption}
                placeholder="Eğitim Seviyesi"
              />
            </div>
            <div style={{ width: "50rem" }}>
              <Form.Select
                fluid
                id="positionLevelId"
                name="positionLevelId"
                label="Pozisyon Seviyesi"
                onChange={(event, data) =>
                  handleChangeValues(data.value, "positionLevelId")
                }
                onBlur={formik.onBlur}
                value={formik.values.positionLevelId}
                options={positionLevelOption}
                placeholder="Pozisyon Seviyesi"
              />
            </div>
          </Form.Group>
          <Form.Group widths="equal">
            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Select
                fluid
                id="wayOfWorkinId"
                name="wayOfWorkinId"
                label="Çalışma Zamanı"
                value={formik.values.wayOfWorkinId}
                onChange={(event, data) =>
                  handleChangeValues(data.value, "wayOfWorkinId")
                }
                onBlur={formik.onBlur}
                value={formik.values.wayOfWorkinId}
                options={wayOfWorkingOption}
                placeholder="Çalışma Zamanı"
              />
            </div>

            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Input
                label="Minimum Maaş"
                placeholder="Minimum Maaş"
                id="minSalary"
                name="minSalary"
                value={formik.values.minSalary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.minSalary && Boolean(formik.errors.minSalary)
                }
              />
              {formik.touched.minSalary && formik.errors.minSalary}
            </div>
            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Input
                label="Maksimum Maaş"
                placeholder="Maksimum Maaş"
                id="maxSalary"
                name="maxSalary"
                value={formik.values.maxSalary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.maxSalary && Boolean(formik.errors.maxSalary)
                }
              />
              {formik.touched.maxSalary && formik.errors.maxSalary}
            </div>
          </Form.Group>

          <Form.TextArea
            label="İş Açıklaması"
            placeholder="İş Açıklaması"
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
          />
          {formik.touched.description && formik.errors.description}
          <Button
            content="Ekle"
            labelPosition="right"
            icon="add"
            positive
            type="submit"
            style={{ marginLeft: "20px" }}
          />
        </Form>
      </Container>
    </div>
  );
}
