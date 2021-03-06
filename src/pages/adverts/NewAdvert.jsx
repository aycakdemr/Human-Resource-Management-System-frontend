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
      jobTitleId: "",
      description: "",
      cityId: "",
      applicationDeadline: "",
      minSalary: "",
      maxSalary: "",
      wayOfWorkingId: "",
      positionLevelId: "",
      educationLevelId: "",
      howToWorkId: "",
    },
    validationSchema: NewAdvertSchema,
    onSubmit: (value) => {
      let newAdv={
        employer : {
            id: 3
        },
        active : false,
        createdDate : "2020-10-10",
        quota : 2,
        city : {
          id: value.cityId
        },
        description : value.description,
        educationLevel :{
          id : value.educationLevelId
        },
        jobPosition : {
          id : value.jobTitleId
        },
        maxSalary : value.maxSalary,
        minSalary : value.minSalary,
        positionLevel : {
          id :value.positionLevelId
        },
        wayofworking : {
          id : value.wayOfWorkingId
        },
        workType : {
          id :value.howToWorkId
        },
        applicationDeadline : value.applicationDeadline,

      }
      
      JobAdvertService.add(newAdv).then((result) =>
        console.log(result.errors)
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
                label="Son Ba??vuru Tarihi"
                placeholder="Son Ba??vuru Tarihi"
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
                id="jobTitleId"
                name="jobTitleId"
                label="???? Ba??l??????"
                value={formik.values.jobTitleId}
                onChange={(event, data) =>
                  handleChangeValues(data.value, "jobTitleId")
                }
                onBlur={formik.onBlur}        
                options={jobPositionOption}
                placeholder="???? Ba??l??????"
              />
            </div>
            <div style={{ width: "50rem" }}>
              <Form.Select
                
                selection
                item
                clearable
                search
                id="howToWorkId"
                name="howToWorkId"
                label="??al????ma ??ekli"
                value={formik.values.howToWorkId}
                onChange={(event, data) =>
                  handleChangeValues(data.value, "howToWorkId")
                }
                onBlur={formik.onBlur}
                options={howToWorkOption}
                placeholder="??al????ma ??ekli"
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
                id="cityId"
                name="cityId"
                label="??ehir Ad??"
                value={formik.values.city}
                onChange={(event, data) =>
                  handleChangeValues(data.value, "cityId")
                }
                onBlur={formik.onBlur}
               
                options={cityOption}
                placeholder="??ehir Ad??"
              /> 
            </div>

            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Select
                
                selection
                item
                clearable
                search
                id="educationLevelId"
                name="educationLevelId"
                label="E??itim Seviyesi"
                value={formik.values.educationLevelId}
                onChange={(event, data) =>
                  handleChangeValues(data.value, "educationLevelId")
                }
                onBlur={formik.onBlur}
                
                options={educationLevelOption}
                placeholder="E??itim Seviyesi"
              />
            </div>
            <div style={{ width: "50rem" }}>
              <Form.Select
                
                selection
                item
                clearable
                search
                id="positionLevelId"
                name="positionLevelId"
                label="Pozisyon Seviyesi"
                value={formik.values.positionLevelId}
                onChange={(event, data) =>
                  handleChangeValues(data.value, "positionLevelId")
                }
                onBlur={formik.onBlur}
                
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
                id="wayOfWorkingId"
                name="wayOfWorkingId"
                label="??al????ma Zaman??"
                value={formik.values.wayOfWorkingId}
                onChange={(event, data) =>
                  handleChangeValues(data.value, "wayOfWorkingId")
                }
                onBlur={formik.onBlur}
                
                options={wayOfWorkingOption}
                placeholder="??al????ma Zaman??"
              />
            </div>

            <div style={{ width: "50rem", marginRight: "0.5rem" }}>
              <Form.Input
                type="number"
                label="Minimum Maa??"
                placeholder="Minimum Maa??"
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
                label="Maksimum Maa??"
                placeholder="Maksimum Maa??"
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
            label="???? A????klamas??"
            placeholder="???? A????klamas??"
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
