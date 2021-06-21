import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Container, Button } from "semantic-ui-react";
import JobPositionService from "../../services/jobPositionService";
import HowToWorkService from "../../services/howToWorkService";
import CityService from "../../services/cityService";
import WayOfWorkingService from "../../services/wayOfWorkingService";
import PositionLevelService from "../../services/positionLevelService";
import EducationLevelService from "../../services/educationLevelService";
import JobAdvertisementService from "../../services/jobAdvertisementService";

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
   
  });
  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      description: "",
      city: "",
      applicationDeadline: "",
      minSalary: "",
      maxSalary: "",
      wayOfWorking: "",
      positionLevel: "",
      educationLevel: "",
      howToWork: "",
    },
    validationSchema: NewAdvertSchema,
    onSubmit: (value) => {
      value.isActive = true;
      value.createdDate = "12/10/2020";
      value.quota = 2;
      JobAdvertService.add(value).then((result) =>
        console.log(value)
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
              type ="date"
                label="Son Başvuru Tarihi"
                placeholder="Son Başvuru Tarihi"
                id="applicationDeadline"
                name="applicationDeadline"
                value={formik.values.applicationDeadline}

                onChange={formik.handleChange}
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
                
                selection
                item
                clearable
                search
                id="jobTitle"
                name="jobTitle"
                label="İş Başlığı"
                onChange={(event, data) =>
                  handleChangeValues(data.value, "jobTitle")
                }
                onBlur={formik.onBlur}
                value={formik.values.jobTitle}
                options={jobPositionOption}
                placeholder="İş Başlığı"
              />
            </div>
            <div style={{ width: "50rem" }}>
              <Form.Select
                
                selection
                item
                clearable
                search
                id="howToWork"
                name="howToWork"
                label="Çalışma Şekli"
                onChange={(event, data) =>
                  handleChangeValues(data.value, "howToWork")
                }
                onBlur={formik.onBlur}
                value={formik.values.howToWork}
                options={howToWorkOption}
                placeholder="Çalışma Şekli"
              />
            </div>
          </Form.Group>

          <Form.Group widths="equal">
            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Select
                
                selection
                item
                clearable
                search
                id="city"
                name="city"
                label="Şehir Adı"
                onChange={(event, data) =>
                  handleChangeValues(data.value, "city")
                }
                onBlur={formik.onBlur}
                value={formik.values.city}
                options={cityOption}
                placeholder="Şehir Adı"
              />
            </div>

            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Select
                
                selection
                item
                clearable
                search
                id="educationLevel"
                name="educationLevel"
                label="Eğitim Seviyesi"
                onChange={(event, data) =>
                  handleChangeValues(data.value, "educationLevel")
                }
                onBlur={formik.onBlur}
                value={formik.values.educationLevel}
                options={educationLevelOption}
                placeholder="Eğitim Seviyesi"
              />
            </div>
            <div style={{ width: "50rem" }}>
              <Form.Select
                
                selection
                item
                clearable
                search
                id="positionLevel"
                name="positionLevel"
                label="Pozisyon Seviyesi"
                onChange={(event, data) =>
                  handleChangeValues(data.value, "positionLevel")
                }
                onBlur={formik.onBlur}
                value={formik.values.positionLevel}
                options={positionLevelOption}
                placeholder="Pozisyon Seviyesi"
              />
            </div>
          </Form.Group>
          <Form.Group widths="equal">
            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Select
                
                selection
                item
                clearable
                search
                id="wayOfWorking"
                name="wayOfWorking"
                label="Çalışma Zamanı"
                value={formik.values.wayOfWorking}
                onChange={(event, data) =>
                  handleChangeValues(data.value, "wayOfWorking")
                }
                onBlur={formik.onBlur}
                value={formik.values.wayOfWorking}
                options={wayOfWorkingOption}
                placeholder="Çalışma Zamanı"
              />
            </div>

            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Input
                type="number"
                label="Minimum Maaş"
                placeholder="Minimum Maaş"
                id="minSalary"
                name="minSalary"
                value={formik.values.minSalary}
                onChange={formik.handleChange}
                error={
                  formik.touched.minSalary && Boolean(formik.errors.minSalary)
                }
              />
              {formik.touched.minSalary && formik.errors.minSalary}
            </div>
            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Input
                type="number"
                label="Maksimum Maaş"
                placeholder="Maksimum Maaş"
                id="maxSalary"
                name="maxSalary"
                value={formik.values.maxSalary}
                onChange={formik.handleChange}
                error={
                  formik.touched.maxSalary && Boolean(formik.errors.maxSalary)
                }
              />
              {formik.touched.maxSalary && formik.errors.maxSalary}
            </div>
          </Form.Group>

          <Form.TextArea
          type="text"
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